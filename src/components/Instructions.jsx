const Instructions = () => {
  return (
    <div className="h-2/6 flex flex-col justify-center items-center text-[#ffffff] text-xs mx-auto ">
      <h3 className="mb-3">Instructions:</h3>
      <ol className="list-decimal">
        <li>
          Add bots by entering a name, a color, and then selecting their boolean
          value, initial direction of movement, and opertation. You can add up
          to four bots.
        </li>
        <li>
          Select the bots you wish to play by clicking on them in the list.
        </li>
        <li>Press the Battle! button to begin the match.</li>
      </ol>
    </div>
  );
};

export default Instructions;
