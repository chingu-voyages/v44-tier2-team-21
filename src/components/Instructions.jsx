const Instructions = () => {
  return (
    <div className='h-2/6 flex flex-col justify-center items-center text-[#ffffff] text-xs mx-auto '>
      <button className='2xl:hidden px-9 py-2 mt-3 rounded-full bg-[#D9D9D9] text-[#000000]'>
        Instructions
      </button>
      <div className='xl:hidden'>
        <h3 className='mb-3'>Instructions:</h3>
        <ol className='list-decimal'>
          <li>
            Add bots by entering a name, a color, and then selecting
            their boolean value, initial direction of movement, and
            opertation. You can add up to four bots.
          </li>
          <li>
            Select the bots you wish to play by clicking on them in
            the list.
          </li>
          <li>Press the Battle! button to begin the match.</li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
