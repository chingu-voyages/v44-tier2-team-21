import { useEffect, useState, useContext } from "react";
import { BotContext } from "../context/botcontext/BotState";

const EditBots = ({ hideEditForm, setHideEditForm, currentBot }) => {
  const { botdata, setMainState, mainState } = useContext(BotContext);
  const { name, color, bool, initDirection, operation } = currentBot;
  const [botName, setName] = useState(name);
  const [botColor, setColor] = useState(color);
  const [botBool, setBool] = useState(bool);
  const [botInitDirection, setInitDirection] = useState(initDirection);
  const [botOperation, setOperation] = useState(operation);

  useEffect(() => {
    setName(name);
    setColor(color);
    setBool(bool);
    setInitDirection(initDirection);
    setOperation(operation);
  }, [name, color, bool, initDirection, operation, JSON.stringify(botdata)]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editFormData = {
      id: currentBot.id,
      name: botName,
      color: botColor,
      bool: botBool,
      initDirection: botInitDirection,
      operation: botOperation,
      selected: currentBot.selected,
      score: currentBot.score,
    };

    setMainState({
      ...mainState,
      botdata: botdata.map((bot) =>
        bot.id === currentBot.id ? editFormData : bot
      ),
    });

    setHideEditForm(!hideEditForm);
  };

  const handleDelete = () => {
    setMainState({
      botdata:
        botdata.length === 1
          ? []
          : botdata.filter((bot) => {
              return bot.id != currentBot.id;
            }),
    });
  };

  return (
    <form
      className="bot-config border rounded-xl p-2 mt-5 mx-3"
      hidden={hideEditForm}
      onSubmit={handleSubmit}
    >
      <div className="icon-and-name  flex flex-row">
        <label htmlFor="name" className="hidden">
          name
        </label>
        <div>
          <input
            type="text"
            placeholder="NAME"
            className="w-3/5 p-2 border border-white rounded-xl bg-transparent"
            maxLength={10}
            value={botName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <label htmlFor="color" className="hidden">
          Color
        </label>
        <input
          type="text"
          placeholder="COLOR"
          className="w-3/5 p-2 border border-white rounded-xl bg-transparent h-10"
          value={botColor}
          onChange={(e) => setColor(e.target.value)}
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
          value={botBool}
          onChange={(e) => setBool(e.target.value)}
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
          value={botInitDirection}
          onChange={(e) => setInitDirection(e.target.value)}
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
          value={botOperation}
          onChange={(e) => setOperation(e.target.value)}
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
      <button className="border rounded-xl px-4 py-1">SAVE</button>
      <button
        className="border rounded-xl px-4 py-1 bg-red-600"
        onClick={handleDelete}
      >
        DELETE
      </button>
    </form>
  );
};

export default EditBots;
