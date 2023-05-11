import { useRef, useEffect, useContext } from "react";
import icon1 from "../assets/ghoss.svg";

import { BotContext } from "../context/botcontext/BotState";

function Canvas() {
  const canvasRef = useRef(null);
  const data = useContext(BotContext);
  const { botdata } = data;

  const Bot1 = botdata[0];
  const Bot2 = botdata[1];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = icon1;

    // BLUE
    let x1 = Bot1.x;
    let y1 = Bot1.y;
    // RED
    let x2 = Bot2.x;
    let y2 = Bot2.y;

    let angle1 = Math.random() * Math.PI * 2;
    let angle2 = Math.random() * Math.PI * 2;

    function animate() {
      requestAnimationFrame(animate);
      // Stage Drawing
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the first square
      context.fillStyle = Bot1.color;
      context.drawImage(img, x1, y1, 50, 50);

      // Draw the second square
      context.fillStyle = Bot2.color;
      context.drawImage(img, x2, y2, 50, 50);

      // Update the position of the first square BLUE
      let dx1 = Bot1.speed * Math.cos(angle1);
      let dy1 = Bot1.speed * Math.sin(angle1);
      x1 += dx1;
      y1 += dy1;

      // Update the position of the second square RED
      let dx2 = Bot2.speed * Math.cos(angle2);
      let dy2 = Bot2.speed * Math.sin(angle2);
      x2 += dx2;
      y2 += dy2;

      // Check if the first square has reached the edges of the canvas
      if (x1 + 50 >= canvas.width) {
        x1 = canvas.width - 50;
        angle1 = Math.PI - angle1;
      } else if (x1 <= 0) {
        x1 = 0;
        angle1 = Math.PI - angle1;
      }

      if (y1 + 50 >= canvas.height) {
        y1 = canvas.height - 50;
        angle1 = 2 * Math.PI - angle1;
      } else if (y1 <= 0) {
        y1 = 0;
        angle1 = 2 * Math.PI - angle1;
      }

      // Check if the second square has reached the edges of the canvas
      if (x2 + 50 >= canvas.width) {
        x2 = canvas.width - 50;
        angle2 = Math.PI - angle2;
      } else if (x2 <= 0) {
        x2 = 0;
        angle2 = Math.PI - angle2;
      }

      if (y2 + 50 >= canvas.height) {
        y2 = canvas.height - 50;
        angle2 = 2 * Math.PI - angle2;
      } else if (y2 <= 0) {
        y2 = 0;
        angle2 = 2 * Math.PI - angle2;
      }
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={480}
      className='border-4 rounded-lg border-[#2803fc]'
    />
  );
}

export default Canvas;
