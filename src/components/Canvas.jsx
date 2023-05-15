import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

Canvas.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};

function Canvas({ isAnimating }) {
  const canvasRef = useRef(null);
  let animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let x1 = 80;
    let y1 = 180;
    let x2 = 200;
    let y2 = 100;
    let speed = 3;
    let angle1 = Math.random() < 0.5 ? 0 : Math.PI / 2;
    let angle2 = Math.random() < 0.5 ? 0 : Math.PI / 2;

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the first square
      context.fillStyle = 'blue';
      context.fillRect(x1, y1, 50, 50);

      // Draw the second square
      context.fillStyle = 'red';
      context.fillRect(x2, y2, 50, 50);

      // Update the position of the first square
      let dx1 = speed * Math.cos(angle1);
      let dy1 = speed * Math.sin(angle1);
      x1 += dx1;
      y1 += dy1;

      // Update the position of the second square
      let dx2 = speed * Math.cos(angle2);
      let dy2 = speed * Math.sin(angle2);
      x2 += dx2;
      y2 += dy2;

      if (
        x1 < x2 + 50 &&
        x1 + 50 > x2 &&
        y1 < y2 + 50 &&
        y1 + 50 > y2
      ) {
        // Handle the collision (Change colors for now)
        context.fillStyle = 'green';
        context.fillRect(x1, y1, 50, 50);
        context.fillStyle = 'yellow';
        context.fillRect(x2, y2, 50, 50);
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
  }, [isAnimating]);

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
