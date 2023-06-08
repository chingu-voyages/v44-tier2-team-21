import { useContext, useState } from 'react';
import Canvas from './Canvas';
import { BotContext } from '../context/botcontext/BotState';
import Instructions from './Instructions';
import InstructionsModalButton from './InstructionsModalButton';
import InstructionsModal from './InstructionsModal';

const Arena = () => {
  const [isInstructionsModalOpen, setInstructionsModalOpen] =
    useState(false);

  const handleButtonClick = () => {
    setInstructionsModalOpen(true);
  };

  const closeInstructionsModal = () => {
    setInstructionsModalOpen(false);
  };

  const data = useContext(BotContext);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState(3);
  const selectedBots = data.botdata.filter((bot) => {
    if (bot.selected === true) {
      return bot;
    }
  });

  const handleToggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };
  return (
    <div className='w-3/6 h-full bg-[#1e1e1e] text-[#FFFFFF] flex flex-col items-center'>
      <Canvas isAnimating={isAnimating} speed={parseInt(speed)} />
      <div>
        <div className='speed-battle my-12 flex justify-center items-center'>
          <div className='speed form-group mr-14'>
            <label htmlFor='speed' className='mr-3'>
              SPEED
            </label>
            <input
              type='range'
              min='1'
              max='10'
              name='speed'
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
              className='appearance-none bg-red-500'
            />
          </div>
          <button
            type='button'
            className='font-semibold text-[#FCE300]'
            onClick={handleToggleAnimation}
            disabled={selectedBots.length > 1 ? false : true}
          >
            {isAnimating ? 'Stop' : 'Battle!'}
          </button>
        </div>
        <div className='h-2/6 flex flex-col justify-center items-center text-[#ffffff] text-xs mx-auto'>
          <InstructionsModalButton
            handleButtonClick={handleButtonClick}
          />
          <Instructions />
        </div>
      </div>
      {isInstructionsModalOpen && (
        <InstructionsModal
          closeInstructionsModal={closeInstructionsModal}
        />
      )}
    </div>
  );
};

export default Arena;
