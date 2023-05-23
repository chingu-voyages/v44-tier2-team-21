import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Arena from './components/Arena';
import Controls from './components/Controls';
import Footer from './components/Footer';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import { BotProvider } from './context/botcontext/BotState';
import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined'
        ? ''
        : navigator.userAgent;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return (
    <div className='app'>
      {!isMobile && (
        <BotProvider>
          <div className='App h-screen bg-[#1e1e1e] font-default'>
            <Header />
            <div className='h-5/6 px-3 flex mx-auto space-x-9 py-7'>
              <Scoreboard />
              <Arena />
              <Controls />
            </div>
            <Footer />
          </div>
        </BotProvider>
      )}
      {isMobile && (
        <Modal>
          <p className='text-center'>
            This app is for desktop use only.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default App;
