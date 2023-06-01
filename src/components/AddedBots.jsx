import { useContext } from 'react';
import menu from '../assets/menu.svg';
import { BotContext } from '../context/botcontext/BotState';
import { contructRandomSvg } from '../helper/BotFunctions';

const AddedBots = ({ bot }) => {
  const { botdata, setMainState } = useContext(BotContext);

  return (
    <div className='flex items-center'>
      <div
        className={`${
          bot.selected ? 'border-red-500' : 'border-white'
        } bot-added border rounded-xl flex flex-row flex-grow mb-3 p-2 items-center cursor-pointer`}
        key={bot.id}
        onClick={() => {
          const newBotData = botdata.map((elem) => {
            if (elem.id === bot.id) {
              elem.selected = !bot.selected;
            }
            return elem;
          });
          setMainState({ botdata: newBotData });
        }}
      >
        <img
          src={contructRandomSvg(bot.color)}
          alt=''
          className='w-1/6'
        />
        <div className='name-and-characteristics w-4/6 flex flex-col ml-2'>
          <p>{bot.name}</p>
          <div className='characteristics flex'>
            <p className='mr-1 text-xs'>{bot.operation}</p>
            <p className='text-xs'>{bot.bool}</p>
          </div>
        </div>
      </div>
      <div className='flex-shrink-0'>
        <img
          src={menu}
          alt=''
          className='ml-4 w-12 h-16 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default AddedBots;
