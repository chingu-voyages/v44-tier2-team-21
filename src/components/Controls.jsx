import { useContext, useState, useRef, useEffect } from "react";
import icon2 from "../assets/ghosss.svg";
import AddedBots from "./AddedBots";
import EditBots from "./EditBots";

// BOT CONTEXT IMPORTED
import { BotContext } from "../context/botcontext/BotState";

const Controls = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [currentBot, setCurrentBot] = useState({});
  const [editBotData, setEditBotData] = useState(null);
  const [hideEditForm, setHideEditForm] = useState(true);
  const { botdata, setMainState, mainState } = useContext(BotContext);
  const boolRef = useRef(0);
  const colorRef = useRef("");
  const directionRef = useRef("");
  const operationRef = useRef("");

  const isNameUnavailable = () =>
    botdata.some(
      (bot) => bot.name === name && (!editBotData || bot.id !== editBotData.id)
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: editBotData ? editBotData.id : botdata.length + 1,
      name,
      bool: parseInt(boolRef?.current.value),
      color: colorRef?.current?.value || "hotpink",
      initDirection: directionRef?.current?.value,
      operation: operationRef.current.value,
      selected: false,
      score: 0,
    };

    setMainState({ ...mainState, botdata: [...botdata, formData] });

    // Reset form and state
    setName("");
    boolRef.current.value = "";
    colorRef.current.value = "";
    directionRef.current.value = "";
    operationRef.current.value = "";
    setEditBotData(null);
    setShow(false);
  };

  const handleClick = () => {
    setName("");
    setShow(!show);
  };

  return (
    <div className="mr-6 w-full h-full bg-[#1E1E1E] text-[#FFFFFF] text-center border-4 rounded-md border-[#FF0000] max-w-sm">
      <h2 className="mb-7 text-2xl mt-5">GAME CONFIGURATION</h2>
      <h3 className="mb-3">{botdata?.length ? "Select Players" : ""}</h3>
      {/* displaying bot data */}
      {botdata?.map((bot) => {
        return (
          <AddedBots
            bot={bot}
            key={bot.id}
            hideEditForm={hideEditForm}
            setHideEditForm={setHideEditForm}
            setCurrentBot={setCurrentBot}
          />
        );
      })}
      <EditBots
        hideEditForm={hideEditForm}
        setHideEditForm={setHideEditForm}
        currentBot={currentBot}
      />
      {!show && (
        <button
          onClick={handleClick}
          className={
            botdata?.length === 4
              ? "hidden"
              : "px-9 py-2 mt-3 rounded-full bg-[#D9D9D9] text-[#000000]"
          }
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
              <label htmlFor="name" className="hidden">
                name
              </label>
              <div>
                <input
                  required
                  type="text"
                  placeholder="NAME"
                  className="w-3/5 p-2 border border-white rounded-xl bg-transparent"
                  maxLength={10}
                  onChange={(e) => setName(e.target.value)}
                />
                {isNameUnavailable() ? (
                  <p className="text-xs text-red-500">
                    this name is already in use
                  </p>
                ) : null}
              </div>

              <label htmlFor="color" className="hidden">
                Color
              </label>
              <input
                type="text"
                placeholder="COLOR"
                className="w-3/5 p-2 border border-white rounded-xl bg-transparent h-10"
                ref={colorRef}
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
                required
              >
                <option value="" disabled selected>
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
                required
              >
                <option value="" disabled selected>
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
                ref={operationRef}
                required
              >
                <option selected disabled value="">
                  OPERATION
                </option>
                <option defaultValue="AND">AND</option>
                <option defaultValue="XOR">XOR</option>
                <option defaultValue="OR">OR</option>
                <option defaultValue="NOR">NOR</option>
              </select>
            </div>
            <button
              className="border rounded-xl px-4 py-1"
              type="submit"
              disabled={isNameUnavailable()}
            >
              SAVE
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Controls;
