import Bot from "../factory/Bot";
import { AND, OR, XOR, NOR } from "../helper/BoolFunctions";

export const setWallCollisions = ({ bot, canvas }) => {
  //wall collisions
  if (bot.getXValue() + 50 >= canvas.width) {
    bot.setXValue(canvas.width - 50);
    bot.setAngle(Math.random() * Math.PI * 2); // Update angle1 with a new random direction
  } else if (bot.getXValue() <= 0) {
    bot.setXValue(0);
    bot.setAngle(Math.random() * Math.PI * 2);
  }

  if (bot.getYValue() + 50 >= canvas.height) {
    bot.setYValue(canvas.height - 50);
    bot.setAngle(Math.random() * Math.PI * 2);
  } else if (bot.getYValue() <= 0) {
    bot.setYValue(0);
    bot.setAngle(Math.random() * Math.PI * 2);
  }
};

/**
 * * we are passing positionArr which can be values of x position or y positions
 */

export const botCollision = (botArr) => {
  const collidingArray = [];
  const BOT_SIZE = 45;
  // * We are looping over each value in the array of positions to check for the same instance of an x or y coordinate
  // * We are comparing if the difference is less than or equal to 50 which is the height and width of the bot
  for (let i = 0; i < botArr.length; i++) {
    for (let j = 0; j < botArr.length; j++) {
      if (i === j) {
        // *If the index are same don't do anything and continue to rest of the loop this is because we are comparing the first value of the array with itself
        continue;
      } else {
        // * If the difference is less than BOT_SIZE that means collision happened
        // * Put the bots which collided in new array and increment i as that values is already checked
        if (
          Math.abs(botArr[i]?.x - botArr[j]?.x) < BOT_SIZE &&
          Math.abs(botArr[i]?.y - botArr[j]?.y) < BOT_SIZE
        ) {
          // * Setting arr.length to 0 empty the array
          // * Remove already existing bots which were colliding,
          collidingArray.length = 0;
          // * Push the bots that are colliding
          collidingArray.push(botArr[i]);
          collidingArray.push(botArr[j]);
          i++;
        }
      }
    }
  }

  // * Return the colliding array
  return collidingArray;
};
/**
 * * Function to return Unique Array
 */
export const getUniqueArray = (arr1, arr2) => {
  const uniqueArr = [];
  [...arr1, ...arr2].forEach((bot, i) => {
    if (i === 0) {
      uniqueArr.push(bot);
    } else if (!uniqueArr.find((elem) => elem.id === bot.id)) {
      uniqueArr.push(bot);
    }
  });
  return uniqueArr;
};

/**
 * * Function to set initial direction
 */
export function getAngleFromDirection(direction) {
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

/**
 * * Function to create a bot array with the Bot constructor class
 */
export const constructBotsArray = (selectedBotsData, canvas) => {
  return selectedBotsData.map((bot) => {
    const defaultXValue = Math.floor(Math.random() * (canvas.width - 50));
    const defaultYValue = Math.floor(Math.random() * (canvas.height - 50));
    const defaultAngle = getAngleFromDirection(bot?.initDirection);
    const svg = contructRandomSvg(bot.color);
    return new Bot(
      bot.id,
      defaultXValue,
      defaultYValue,
      defaultAngle,
      svg,
      bot?.name,
      bot?.bool,
      bot?.operation,
      bot?.initDirection
    );
  });
};

/**
 * * Calculating Boolean After Operation
 * * This is creating a function to consolidate the BoolFunctions which requires the bot's operation and boolean values(bool1) and the opponent's boolean values(bool2)
 */

export const returnBoolAfterOperation = (operation, bool1, bool2) => {
  switch (operation) {
    case "AND":
      return AND(bool1, bool2);
    case "OR":
      return OR(bool1, bool2);
    case "XOR":
      return XOR(bool1, bool2);
    case "NOR":
      return NOR(bool1, bool2);
    default:
      break;
  }
};

/**
 * * Function to set bot colors using texts
 */

export const contructRandomSvg = (newColor) => {
  const color = newColor ? newColor : "hotpink";
  const svg = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      xml:space="preserve"
    >
      <desc>Created with Fabric.js 3.5.0</desc>
      <defs></defs>
      <rect x="0" y="0" width="100%" height="100%" fill="rgba(255,255,255,0)" />
      <g transform="matrix(36.351 0 0 36.351 500.0005 500.0006)" id="206198">
        <path
          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(255,102,196); fill-rule: nonzero; opacity: 1; fill:${color}; "
          vector-effect="non-scaling-stroke"
          transform=" translate(-16, -15.552)"
          d="M 16 2 C 9.9 2 5 6.9 5 13 v 15.1 c 0 0.4 0.2 0.8 0.6 0.9 c 0.4 0.2 0.8 0.1 1.1 -0.2 l 0.7 -0.6 c 0.4 -0.3 0.9 -0.3 1.3 0 c 1.1 1.1 2.9 1.1 4 0 c 0.4 -0.3 0.9 -0.3 1.3 0 c 1.1 1.1 2.9 1.1 4 0 c 0.4 -0.3 0.9 -0.3 1.3 0 c 1.1 1.1 2.9 1.1 4 0 c 0.4 -0.3 0.9 -0.3 1.3 0 l 0.7 0.6 c 0.2 0.2 0.4 0.3 0.7 0.3 c 0.1 0 0.3 0 0.4 -0.1 c 0.4 -0.2 0.6 -0.5 0.6 -0.9 V 13 C 27 6.9 22.1 2 16 2 z M 18 13 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 3 c 0 0.6 -0.4 1 -1 1 s -1 -0.4 -1 -1 V 13 z M 12 13 c 0 -0.6 0.4 -1 1 -1 s 1 0.4 1 1 v 3 c 0 0.6 -0.4 1 -1 1 s -1 -0.4 -1 -1 V 13 z M 21 20 H 11 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 h 10 c 0.6 0 1 0.4 1 1 S 21.6 20 21 20 z"
          stroke-linecap="round"
        />
      </g>
    </svg>`;
  const parser = new DOMParser();
  const newSvg = parser.parseFromString(svg, "text/xml");
  const xml = new XMLSerializer().serializeToString(newSvg);
  const svg64 = window.btoa(xml);
  const b64Start = "data:image/svg+xml;base64,";
  const image64 = b64Start + svg64;
  return image64;
};

const random_rgba = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
};
