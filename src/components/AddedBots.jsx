import { useContext, useReducer } from "react";
import icon1 from "../assets/ghoss.svg";

import menu from "../assets/menu.svg";
import { BotContext } from "../context/botcontext/BotState";
import { contructRandomSvg } from "../helper/canvasCollision";

const AddedBots = ({ bot }) => {
  const { botdata, setMainState } = useContext(BotContext);

  return (
    <div
      className={`${
        bot.selected ? "border-red-500" : "border-white"
      } bot-added border rounded-xl flex flex-row space-x-10 mb-3 p-2 items-center cursor-pointer`}
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
      <img src={contructRandomSvg(bot.color)} alt="" className="w-10" />
      <p>{bot.name}</p>
      <img src={menu} alt="" className="w-8" />
    </div>
  );
};

export default AddedBots;
