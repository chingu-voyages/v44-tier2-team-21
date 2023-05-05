import icon1 from "../assets/ghoss.svg";
import icon2 from "../assets/ghosss.svg";
import menu from "../assets/menu.svg";

const Controls = () => {
  return (
    <div className="w-full h-full bg-[#1E1E1E] text-[#FFFFFF] text-center border-4 rounded-md border-[#FF0000] max-w-sm">
      <h2 className="mb-10 text-2xl">GAME CONFIGURATION</h2>
      <div className="speed-operation my-10">
        <div className="speed form-group">
          <label htmlFor="speed" className="mr-3">
            SPEED
          </label>
          <input type="range" min="1" max="5" name="speed" />
        </div>
        <div className="operation form-group">
          <label htmlFor="operation" className="hidden">
            OPERATION
          </label>
          <select
            name="operation"
            id="operation"
            className="w-3/5 bg-transparent"
          >
            <option value="AND">OPERATION</option>
            <option value="AND">AND</option>
            <option value="XOR">XOR</option>
            <option value="OR">OR</option>
            <option value="NOT">NOT</option>
          </select>
        </div>
      </div>
      <div className="bot-added border rounded-xl flex flex-row space-x-10 mx-4 my-10 p-2 items-center">
        <img src={icon1} alt="" className="w-10" />
        <p>bot1</p>
        <img src={menu} alt="" className="w-8" />
      </div>
      {/*map bots here*/}
      {/* {botsData.map((bot) => {
        return (
          <div className="bot-added">
            <img src={icon1} alt="" />
            <p>{bot.name}</p>
            <img src={menu} alt="" />
          </div>
        );
      })} */}
      <form className="bot-config border rounded-xl p-2 m-3">
        <div className="icon-and-name  flex flex-row">
          <img src={icon2} alt="" className="w-10" />
          <label htmlFor="name" className="hidden">
            name
          </label>
          <input
            type="text"
            placeholder="NAME"
            className="w-3/5 p-2 border border-white rounded-xl bg-transparent"
          />
        </div>
        <div className="bool form-group m-3">
          <label htmlFor="bool" className="hidden">
            BOOLEAN VALUE
          </label>
          <select name="bool" id="bool" className="bool bg-transparent">
            <option value="0" disabled selected>
              BOOLEAN VALUE
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>
        <div className="init-direction form-group m-3">
          <label htmlFor="init-direction" className="hidden">
            INITIAL DIRECTION
          </label>
          <select
            name="init-direction"
            id="init-direction"
            className="bg-transparent"
          >
            <option disabled selected>
              INITIAL DIRECTION
            </option>
            <option value="north">NORTH</option>
            <option value="east">EAST</option>
            <option value="south">SOUTH</option>
            <option value="west">WEST</option>
          </select>
        </div>
        <button className="border rounded-xl px-4 py-1">SAVE</button>
      </form>
    </div>
  );
};

export default Controls;
