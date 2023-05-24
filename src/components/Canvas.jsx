import { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { BotContext } from "../context/botcontext/BotState";
import { AND, OR, XOR, NOR } from "../helper/BoolFunctions";
import {
  botCollision,
  constructBotsArray,
  getUniqueArray,
  returnBoolAfterOperation,
  setWallCollisions,
} from "../helper/BotFunctions";

Canvas.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
};

function Canvas({ isAnimating, speed }) {
  const canvasRef = useRef(null);
  let animationFrameId = useRef(null);

  const data = useContext(BotContext);
  const selectedBotsData = data.botdata.filter((bot) => {
    if (bot.selected === true) {
      return bot;
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

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

      // !This array will have all the bots that are colliding.

      console.log(collidingBotsArr);
      if (areBotsColliding) {
        // *If the bots are colliding then remove the duplicates from combiniation of X and Y.
        // collidingBots = getUniqueArray(isCollidingArrX, isCollidingArrY);
        let dx = 0;
        let dy = 0;

        // * setting bot1
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

        console.log(bot1BoolResultOperation, bot2BoolResultOperation);

        // * Check winning bot
        if (bot1BoolResultOperation === bot2BoolResultOperation) {
          console.log("TIE", bot1BoolResultOperation, bot2BoolResultOperation);
        } else if (
          bot1BoolResultOperation === 1 &&
          bot2BoolResultOperation === 0
        ) {
          bot2.setXValue(bot2.getXValue + 0);

          console.log(
            `${bot1.name} wins`,
            `${bot2.name} loses`,
            `${bot1.operation} ${bot1.bool}`,
            `${bot2.operation} ${bot2.bool}`
          );
        } else if (
          bot2BoolResultOperation === 1 &&
          bot1BoolResultOperation === 0
        ) {
          bot1.setXValue(bot1.getXValue + 0);

          console.log(
            `${bot2.name} wins!`,
            `${bot1.name} loses`,
            `${bot2.operation} ${bot2.bool}`,
            `${bot1.operation} ${bot1.bool}`
          );
        } else {
          console.log("there's something wrong with your code");
        }
      }

      if (isAnimating) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    }

    if (isAnimating) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isAnimating, speed, selectedBotsData]);

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
