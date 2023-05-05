import Arena from './components/Arena';
import Controls from './components/Controls';
import Footer from './components/Footer';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

import './App.css';

function App() {
  return (
    <div className='App h-screen bg-[#1e1e1e] font-default'>
      <Header />
      <div className='h-3/4 px-3 flex mx-auto space-x-9 py-7'>
        <Scoreboard />
        <Arena />
        <Controls />
      </div>
      <Footer />
    </div>
  );
}

export default App;
