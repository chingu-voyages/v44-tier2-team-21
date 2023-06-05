import crown from "../assets/crown.svg";
const LeaderBots = ({ data }) => {
  return (
    <div className="flex flex-col mx-auto w-full items-start justify-start">
      {data.map((elem, i) => {
        if (elem.score > 0) {
          return (
            <div key={elem.id} className="flex mx-auto my-1 w-full">
              <p className="w-3/6">{elem.name} </p>
              <p className="w-2/6">{elem.score}</p>
              {i === 0 && elem.score != data[i + 1].score ? (
                <img src={crown} className="w-5" />
              ) : null}
            </div>
          );
        }
      })}
    </div>
  );
};

export default LeaderBots;
