const Instructions = () => {
  return (
    <div className='flex flex-col justify-center text-[#ffffff] text-xs'>
      <ol>
        <li>
          Add bots by entering a name, a color, and then selecting
          their boolean value, initial direction of movement, and
          their opertation. You can add up to four bots.
        </li>
        <li>
          Select the bots you wish to play by clicking on them in the
          list.
        </li>
        <li>Press the Battle! button to beging the match.</li>
      </ol>
    </div>
  );
};

export default Instructions;
