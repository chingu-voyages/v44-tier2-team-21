import { useContext, useState } from "react";
import Canvas from "./Canvas";
import { BotContext } from "../context/botcontext/BotState";
import Instructions from "./Instructions";

const Arena = () => {
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
    <div className="w-3/6 mx-auto h-full bg-[#1e1e1e] text-[#FFFFFF] flex flex-col items-center">
      <Canvas isAnimating={isAnimating} speed={speed} />
      <div>
        <div className="speed-battle mt-5 mb-7 flex justify-center">
          <div className="speed form-group mr-14">
            <label htmlFor="speed" className="mr-3">
              SPEED
            </label>
            <input
              type="range"
              min="1"
              max="10"
              name="speed"
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="font-semibold text-[#FCE300]"
            onClick={handleToggleAnimation}
            disabled={selectedBots.length > 1 ? false : true}
          >
            {isAnimating ? "Stop" : "Battle!"}
          </button>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default Arena;
