import React, { createContext, useReducer, useState } from "react";
import BotReducer from "./BotReducer";

// DUMMY DATA
const initialstate = {
  botdata: [
    {
      bool: "0",
      id: 1,
      initDirection: "NORTH",
      name: "gary",
      operation: "XOR",
      selected: false,
    },
  ],
};

// CONTEXT
export const BotContext = createContext(initialstate);

// PROVIDER
export const BotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BotReducer, initialstate);
  const [mainState, setMainState] = useState(initialstate);

  //action
  const selectedBots = (id) => {
    dispatch({
      type: "SELECTED",
      payload: id,
    });
  };

  return (
    <BotContext.Provider
      value={{
        botdata: mainState?.botdata,
        setMainState,
        mainState,
        selectedBots,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};
