import { useContext, useState } from "react";
import Canvas from "./Canvas";
import { BotContext } from "../context/botcontext/BotState";

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
    <div className="w-3/6 h-full bg-[#1e1e1e] text-[#FFFFFF] flex flex-col items-center">
      <Canvas isAnimating={isAnimating} speed={speed} />
      <div>
        <div className="speed-operation my-10">
          <div className="speed form-group">
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
        </div>
        <button
          type="button"
          className="px-8 py-3 font-semibold text-[#FCE300]"
          onClick={handleToggleAnimation}
          disabled={selectedBots.length > 1 ? false : true}
        >
          {isAnimating ? "Stop" : "Battle!"}
        </button>
      </div>
    </div>
  );
};

export default Arena;
