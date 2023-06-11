import { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { BotContext } from "../context/botcontext/BotState";

import {
  botCollision,
  constructBotsArray,
  returnBoolAfterOperation,
  setWallCollisions,
  checkWinningBot,
} from "../helper/BotFunctions";

Canvas.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
};

function Canvas({ isAnimating, speed }) {
  const canvasRef = useRef(null);
  let animationFrameId = useRef(null);

  const data = useContext(BotContext);
  const selectedBotsData = data?.botdata?.filter((bot) => {
    if (bot.selected === true) {
      return bot;
    }
  });

  let stopTimeout = null;

  //* GRIDZ

  function drawGrid(canvas, gridSize) {
    const context = canvas.getContext("2d");
    const squareSize = canvas.width / gridSize;

    context.strokeStyle = "#000"; // Color of the grid lines

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const xPos = x * squareSize;
        const yPos = y * squareSize;

        context.strokeRect(xPos, yPos, squareSize, squareSize);
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const botsArray = constructBotsArray(selectedBotsData, canvas);

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // * Loop over each bot value in the array to draw and animate
      botsArray.forEach((bot) => {
        const icon = new Image();
        icon.src = bot.image;
        const defaultAngle = bot.getAngle();
        const defaultDx = speed * Math.cos(defaultAngle);
        const defaultDy = speed * Math.sin(defaultAngle);
        bot.draw(context, bot.getXValue(), bot.getYValue(), icon);
        bot.setXValue(bot.getXValue() + defaultDx);
        bot.setYValue(bot.getYValue() + defaultDy);

        //* wall collision event
        setWallCollisions({ bot, canvas });
      });

      // * Arrays of X and Y positions
      const xPositionForBots = [];
      const yPositionsForBots = [];

      // *Move X and Y position for bots in a separate arrays so we can compare them
      botsArray.forEach((elem) => {
        xPositionForBots.push(elem.x);
        yPositionsForBots.push(elem.y);
      });

      // *Check if any of the array of X and array of Y collides.
      const collidingBotsArr = botCollision(botsArray);
      const areBotsColliding = collidingBotsArr.length;

      if (areBotsColliding) {
        // *If the bots are colliding then remove the duplicates from combiniation of X and Y.
        // collidingBots = getUniqueArray(isCollidingArrX, isCollidingArrY);
        let dx = 0;
        let dy = 0;

        // *setting the first 2 bots colliding since there can be multiple colliding at a time
        let bot1 = collidingBotsArr[0];
        let bot2 = collidingBotsArr[1];

        // * code that will pause the colliding bots

        // * calculate the bool value of each bot after applying operation
        const bot1BoolResultOperation = returnBoolAfterOperation(
          bot1.operation,
          bot1.bool,
          bot2.bool
        );

        const bot2BoolResultOperation = returnBoolAfterOperation(
          bot2.operation,
          bot2.bool,
          bot1.bool
        );
        // * Check winning bot
        checkWinningBot(
          bot1BoolResultOperation,
          bot2BoolResultOperation,
          bot1,
          bot2,
          botsArray,
          data
        );
      }

      if (isAnimating) {
        drawGrid(canvas, 8);
        animationFrameId.current = requestAnimationFrame(animate);
      }
    }

    if (isAnimating) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isAnimating, speed]);

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={480}
      className="border-4 rounded-xl border-[#0029ff]"
    />
  );
}

export default Canvas;
