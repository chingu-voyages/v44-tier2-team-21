const InstructionsModalButton = ({ handleButtonClick }) => {
  return (
    <div>
      <button
        className='2xl:hidden px-9 py-2 mb-6 mt-3 rounded-full bg-[#D9D9D9] text-[#000000]'
        onClick={handleButtonClick}
      >
        Instructions
      </button>
    </div>
  );
};

export default InstructionsModalButton;
