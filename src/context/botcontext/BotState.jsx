import React, { createContext, useReducer, useState } from "react";
import BotReducer from "./BotReducer";

// DUMMY DATA
const initialstate = {
  botdata: [
    {
      bool: 1,
      id: 1,
      initDirection: "NORTH",
      name: "gary",
      operation: "AND",
      color: "hotpink",
      selected: false,
      score: 0,
    },
    {
      bool: 0,
      id: 2,
      initDirection: "EAST",
      name: "cecil",
      operation: "XOR",
      color: "red",
      selected: false,
      score: 0,
    },
    {
      bool: 1,
      id: 3,
      initDirection: "NORTH",
      name: "blue",
      operation: "AND",
      color: "red",
      selected: false,
      score: 0,
    },
    {
      bool: 0,
      id: 4,
      initDirection: "NORTH",
      name: "yellow",
      operation: "AND",
      color: "blue",
      selected: false,
      score: 0,
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
