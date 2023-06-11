import { useContext } from "react";
import { BotContext } from "../context/botcontext/BotState";
import { contructRandomSvg } from "../helper/BotFunctions";

const AddedBots = ({ bot, hideEditForm, setHideEditForm, setCurrentBot }) => {
  const { botdata, setMainState } = useContext(BotContext);

  const handleClick = () => {
    setHideEditForm(!hideEditForm);
    setCurrentBot(bot);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${
          bot.selected ? "border-red-500" : "border-white"
        } bot-added border rounded-xl flex flex-row flex-grow my-2 p-2 items-center cursor-pointer`}
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
        <img src={contructRandomSvg(bot.color)} alt="" className="w-1/6" />
        <div className="name-and-characteristics w-4/6 flex flex-col ml-2 items-center">
          <p className="text-md">{bot.name}</p>
          <div className="characteristics flex">
            <p className="mr-1 text-xs">{bot.operation}</p>
            <p className="text-xs">{bot.bool}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0">
        <h1 onClick={handleClick} className="ml-4 cursor-pointer">
          EDIT
        </h1>
      </div>
    </div>
  );
};

export default AddedBots;
