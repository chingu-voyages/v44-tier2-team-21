import { useContext, useState, useRef, useEffect } from "react";
import icon1 from "../assets/ghoss.svg";
import icon2 from "../assets/ghosss.svg";
import menu from "../assets/menu.svg";

// BOT CONTEXT IMPORTED
import { BotContext } from "../context/botcontext/BotState";

const Controls = () => {
  const [show, setShow] = useState(false);
  const { botdata, setMainState } = useContext(BotContext);

  const nameRef = useRef("");
  const boolRef = useRef(0);
  const directionRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault;

    const formData = {
      id: botdata.length + 1,
      name: nameRef.current.value,
      bool: boolRef.current.value,
      initDirection: directionRef.current.value,
    };

    setMainState({ botdata: [...botdata, formData] });
    setShow(!show);
    console.log(formData);
  };

  return (
    <div className="w-full h-full bg-[#1E1E1E] text-[#FFFFFF] text-center border-4 rounded-md border-[#FF0000] max-w-sm px-5">
      <h2 className="mb-7 text-2xl mt-5">GAME CONFIGURATION</h2>
      {botdata.map((bot) => {
        return (
          <div
            className="bot-added border rounded-xl flex flex-row space-x-10 mb-3 p-2 items-center"
            key={bot.id}
          >
            <img src={icon1} alt="" className="w-10" />
            <p>{bot.name}</p>
            <img src={menu} alt="" className="w-8" />
          </div>
        );
      })}
      {!show && (
        <button
          onClick={() => setShow(!show)}
          className="px-9 py-2 mt-3 rounded-full bg-[#D9D9D9] text-[#000000]"
        >
          + Add Bot
        </button>
      )}
      {show && (
        <div className="panel-to-show-hide">
          <form
            className="bot-config border rounded-xl p-2 mt-5 mx-3"
            onSubmit={handleSubmit}
          >
            <div className="icon-and-name  flex flex-row">
              <img src={icon2} alt="" className="w-10 mx-2" />
              <label htmlFor="name" className="hidden">
                name
              </label>
              <input
                type="text"
                placeholder="NAME"
                className="w-3/5 p-2 border border-white rounded-xl bg-transparent"
                ref={nameRef}
              />
            </div>
            <div className="bool form-group m-3">
              <label htmlFor="bool" className="hidden">
                BOOLEAN VALUE
              </label>
              <select
                name="bool"
                id="bool"
                className="bool bg-transparent"
                ref={boolRef}
              >
                <option defaultValue="0" disabled selected>
                  BOOLEAN VALUE
                </option>
                <option defaultValue="0">0</option>
                <option defaultValue="1">1</option>
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
                ref={directionRef}
              >
                <option disabled selected>
                  INITIAL DIRECTION
                </option>
                <option defaultValue="north">NORTH</option>
                <option defaultValue="east">EAST</option>
                <option defaultValue="south">SOUTH</option>
                <option defaultValue="west">WEST</option>
              </select>
            </div>
            <div className="operation form-group">
              <label htmlFor="operation" className="hidden">
                OPERATION
              </label>
              <select
                name="operation"
                id="operation"
                className=" bg-transparent"
              >
                <option value="AND">OPERATION</option>
                <option value="AND">AND</option>
                <option value="XOR">XOR</option>
                <option value="OR">OR</option>
                <option value="NOT">NOT</option>
              </select>
            </div>
            <button className="border rounded-xl px-4 py-1" type="submit">
              SAVE
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Controls;
