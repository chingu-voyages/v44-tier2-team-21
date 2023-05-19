import { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import icon1 from "../assets/ghoss.svg";
import icon2 from "../assets/ghosss.svg";
import { BotContext } from "../context/botcontext/BotState";
import Bot from "../factory/Bot";
import { AND, OR, XOR, NOR } from "../helper/BoolFunctions";

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

    //default variables
    let x1 = Math.floor(Math.random() * (canvas.width - 50));
    let y1 = Math.floor(Math.random() * (canvas.height - 50));
    let x2 = Math.floor(Math.random() * (canvas.width - 50));
    let y2 = Math.floor(Math.random() * (canvas.height - 50));
    // let angle1 = Math.random() < 0.5 ? 0 : Math.PI / 2;
    // let angle2 = Math.random() < 0.5 ? 0 : Math.PI / 2;

    // Bot 1 North
    // let angle1 = Math.PI / 2;
    // Bot 2 North
    // let angle2 = Math.PI / 2;
    // Bot 1 South
    // let angle1 = (3 * Math.PI) / 2;
    // Bot 2 South
    // let angle2 = (3 * Math.PI) / 2;
    // Bot 1 West
    // let angle1 = Math.PI;
    // Bot 2 West
    // let angle2 = Math.PI;
    // Bot 1 East
    // let angle1 = 0;
    // Bot 2 East
    // let angle2 = 0;

// SWITCH CASE FUNCTION TAKES IN DIRECTION FROM STATE
    function getAngleFromDirection(direction) {
      switch (direction) {
        // 90 DEGREE ANGLE IN RADIANS
        case "SOUTH":
          return Math.PI / 2;
        // 0 DEGREE ANGLE IN RADIANS
        case "EAST":
          return 0;
        // 270 DEGREE ANGLE
        case "NORTH":
          return (3 * Math.PI) / 2;
        // 180 DEGREE ANGLE
        case "WEST":
          return Math.PI;
        default:
          return 0;
      }
    }

// REPLACED THE VARIABLES WITH THE FUNCTION.
let angle1 = getAngleFromDirection('EAST');
let angle2 = getAngleFromDirection('EAST');


    //create first bot
    const img1 = new Image();
    img1.src = icon1;
    const bot1 = new Bot(
      x1,
      y1,
      selectedBotsData[0]?.name,
      selectedBotsData[0]?.bool,
      selectedBotsData[0]?.operation,
      selectedBotsData[0]?.initDirection
    );

    //create 2nd bot
    const img2 = new Image();
    img2.src = icon2;
    const bot2 = new Bot(
      x2,
      y2,
      selectedBotsData[1]?.name,
      selectedBotsData[1]?.bool,
      selectedBotsData[1]?.operation,
      selectedBotsData[1]?.initDirection
    );

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the first bot
      bot1.draw(context, x1, y1, img1);

      // Draw the second bot
      bot2.draw(context, x2, y2, img2);

      // Update the position of the first bot
      let dx1 = speed * Math.cos(angle1);
      let dy1 = speed * Math.sin(angle1);
      x1 += dx1;
      y1 += dy1;

      // Update the position of the second bot
      let dx2 = speed * Math.cos(angle2);
      let dy2 = speed * Math.sin(angle2);
      x2 += dx2;
      y2 += dy2;

      // X Axis Only
      // x2 += dx2;
      // x2 -= dx2;

      // Y Axis Only
      // y2 += dy2;
      // y2 -= dy2;

      if (x1 < x2 + 50 && x1 + 50 > x2 && y1 < y2 + 50 && y1 + 50 > y2) {
        // Handle the collision (Change colors for now)
        context.fillStyle = "green";
        context.fillRect(x1, y1, 50, 50);
        context.fillStyle = "yellow";
        context.fillRect(x2, y2, 50, 50);

        // SWITCH CASE TAKES OPERATIN FROM STATE OBJECT
        switch ("AND") {
          case "AND":
            AND(1, 0);
            break;
          case "OR":
            OR(1, 0);
            break;
          case "XOR":
            XOR(1, 0);
            break;
          case "NOR":
            NOR(1, 0);
            break;

          default:
            break;
        }
      }

      // Check if the first square has reached the edges of the canvas
      if (x1 + 50 >= canvas.width) {
        x1 = canvas.width - 50;
        angle1 = Math.random() * Math.PI * 2; // Update angle1 with a new random direction
      } else if (x1 <= 0) {
        x1 = 0;
        angle1 = Math.random() * Math.PI * 2;
      }

      if (y1 + 50 >= canvas.height) {
        y1 = canvas.height - 50;
        angle1 = Math.random() * Math.PI * 2;
      } else if (y1 <= 0) {
        y1 = 0;
        angle1 = Math.random() * Math.PI * 2;
      }

      // Check if the second square has reached the edges of the canvas
      if (x2 + 50 >= canvas.width) {
        x2 = canvas.width - 50;
        angle2 = Math.random() * Math.PI * 2; // Update angle2 with a new random direction
      } else if (x2 <= 0) {
        x2 = 0;
        angle2 = Math.random() * Math.PI * 2;
      }

      if (y2 + 50 >= canvas.height) {
        y2 = canvas.height - 50;
        angle2 = Math.random() * Math.PI * 2;
      } else if (y2 <= 0) {
        y2 = 0;
        angle2 = Math.random() * Math.PI * 2;
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
