import { useState } from 'react';
import Canvas from './Canvas';

const Arena = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <div className='w-3/6 h-full bg-[#1e1e1e] text-[#FFFFFF] flex flex-col items-center'>
      <Canvas isAnimating={isAnimating} />
      <div>
        <div className='speed-operation my-10'>
          <div className='speed form-group'>
            <label htmlFor='speed' className='mr-3'>
              SPEED
            </label>
            <input type='range' min='1' max='10' name='speed' />
          </div>
          <div className='operation form-group'>
            <label htmlFor='operation' className='hidden'>
              OPERATION
            </label>
            <select
              name='operation'
              id='operation'
              className=' bg-transparent'
            >
              <option value='AND'>OPERATION</option>
              <option value='AND'>AND</option>
              <option value='XOR'>XOR</option>
              <option value='OR'>OR</option>
              <option value='NOT'>NOT</option>
            </select>
          </div>
        </div>
        <button
          type='button'
          className='px-8 py-3 font-semibold text-[#FCE300]'
          onClick={handleToggleAnimation}
        >
          {isAnimating ? 'Stop' : 'Battle!'}
        </button>
      </div>
    </div>
  );
};

export default Arena;
