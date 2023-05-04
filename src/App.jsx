import Arena from "./components/Arena";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

import "./App.css";

function App() {
  return (
    <div className="App h-screen bg-gray-200 text-gray-800 font-default">
      <Header />
      <div className="h-3/4 px-3 flex mx-auto space-x-3 py-7">
        <Scoreboard />
        <Arena />
        <Controls />
      </div>
      <Footer />
    </div>
  );
}

export default App;
