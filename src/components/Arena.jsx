import ArenaGrid from './ArenaGrid';

const Arena = () => {
  return (
    <div className='w-full h-full bg-[#1e1e1e] text-[#FFFFFF]'>
      <ArenaGrid />
      <div className='pt-12 text-center'>
        <button
          type='button'
          className='px-8 py-3 font-semibold text-[#FCE300]'
        >
          Battle!
        </button>
      </div>
    </div>
  );
};

export default Arena;
