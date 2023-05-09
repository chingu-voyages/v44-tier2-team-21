import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });

  return (
    <div className='border-4 rounded-md border-[#0029ff]'>
      <canvas ref={canvas} height={height} width={width} />{' '}
    </div>
  );
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canvas;
