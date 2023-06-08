import { useContext, useEffect, useState } from "react";
import { BotContext } from "../context/botcontext/BotState";
import LeaderBots from "./LeaderBots";

const Scoreboard = ({ scores }) => {
  const data = useContext(BotContext);
  const [leaderData, setLeaderData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    };

    const sortedData = [...data?.botdata].sort(compare);
    setLeaderData(sortedData);
  }, [JSON.stringify(data.botdata)]);

  return (
    <div className="ml-6 w-full h-full bg-[#1E1E1E] text-[#FFFFFF] text-center border-4 rounded-md border-[#FF0000] max-w-sm">
      <h2 className="mb-7 text-2xl mt-5">LEADERBOARD</h2>
      <LeaderBots data={leaderData} />
    </div>
  );
};

export default Scoreboard;
