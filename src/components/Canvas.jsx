import { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let x1 = 80;
    let y1 = 180;
    let x2 = 200;
    let y2 = 100;
    let x1Speed = 1;
    let y1Speed = 2;
    let x2Speed = -2;
    let y2Speed = 1;

    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the first square
      context.fillStyle = 'blue';
      context.fillRect(x1, y1, 50, 50);

      // Draw the second square
      context.fillStyle = 'red';
      context.fillRect(x2, y2, 50, 50);

      // Update the position of the first square
      x1 += x1Speed;
      y1 += y1Speed;

      // Update the position of the second square
      x2 += x2Speed;
      y2 += y2Speed;

      // Check if the first square has reached the edges of the canvas
      if (x1 + 50 >= canvas.width) {
        x1 = canvas.width - 50;
        x1Speed = Math.random() * -10;
      } else if (x1 <= 0) {
        x1 = 0;
        x1Speed = Math.random() * 10;
      }

      if (y1 + 50 >= canvas.height) {
        y1 = canvas.height - 50;
        y1Speed = Math.random() * -10;
      } else if (y1 <= 0) {
        y1 = 0;
        y1Speed = Math.random() * 10;
      }

      // Check if the second square has reached the edges of the canvas
      if (x2 + 50 >= canvas.width) {
        x2 = canvas.width - 50;
        x2Speed = Math.random() * -10;
      } else if (x2 <= 0) {
        x2 = 0;
        x2Speed = Math.random() * 10;
      }

      if (y2 + 50 >= canvas.height) {
        y2 = canvas.height - 50;
        y2Speed = Math.random() * -10;
      } else if (y2 <= 0) {
        y2 = 0;
        y2Speed = Math.random() * 10;
      }
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
}

export default Canvas;
