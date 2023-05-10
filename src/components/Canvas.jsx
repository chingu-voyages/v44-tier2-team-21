import { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let x1 = 0;
    let y1 = 0;
    let x2 = 200;
    let y2 = 100;

    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the first square at a new position
      context.fillStyle = 'blue';
      context.fillRect(x1, y1, 50, 50);

      // Draw the second square at a new position
      context.fillStyle = 'red';
      context.fillRect(x2, y2, 50, 50);

      // Update the position of the first square
      x1 += 1;
      y1 += 2;

      // Update the position of the second square
      x2 -= 2;
      y2 += 1;
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
}

export default Canvas;
