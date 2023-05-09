import Canvas from './Canvas';

const draw = (context) => {
  context.fillStyle = 'rgb(200, 0, 0)';
  context.fillRect(10, 10, 50, 50);

  context.fillStyle = 'rgba(0, 0, 200, 0.5)';
  context.fillRect(30, 30, 50, 50);
};

const Arena = () => {
  return (
    <div className='w-full h-full bg-[#1e1e1e] text-[#FFFFFF]'>
      <Canvas draw={draw} height={400} width={400} />
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
