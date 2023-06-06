const InstructionsModal = ({ closeInstructionsModal }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 text-[#000000] max-w-sm'>
        <h4 className='mb-4 font-bold text-center'>Instructions</h4>
        <ol className='list-decimal flex flex-col gap-y-4'>
          <li className='list-inside'>
            Add bots by entering a name, a color, and then selecting
            their boolean value, initial direction of movement, and
            opertation. You can add up to four bots.
          </li>
          <li className='list-inside'>
            Select the bots you wish to play by clicking on them in
            the list.
          </li>
          <li className='list-inside'>
            Press the Battle! button to begin the match.
          </li>
        </ol>
        <div className='flex justify-center mt-4'>
          <button
            className='px-9 py-2 mt-3 rounded-full bg-[#D9D9D9] text-[#000000]'
            onClick={closeInstructionsModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;
