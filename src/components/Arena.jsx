import ArenaGrid from './ArenaGrid';

const Arena = () => {
  return (
    <div className='w-full h-full bg-slate-100 border border-sky-500'>
      <ArenaGrid />
      <div className='pt-12 text-center'>
        <button
          type='button'
          className='px-8 py-3 font-semibold rounded-full dark:bg-gray-300 dark:text-gray-800'
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Arena;
