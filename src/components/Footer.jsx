import GitHub from '../assets/github-mark.svg';

const Footer = () => {
  return (
    <div className='p-4 h-12 text-xl font-bold bg-slate-400 fixed bottom-0 w-full flex justify-center items-center'>
      <a href='https://github.com/chingu-voyages/v44-tier2-team-21'>
        <img src={GitHub} alt='Github logo' height={30} width={30} />
      </a>
    </div>
  );
};

export default Footer;
