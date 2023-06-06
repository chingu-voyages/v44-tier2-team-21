import React, { createContext, useReducer, useState } from "react";
import BotReducer from "./BotReducer";

// DUMMY DATA
const initialstate = {
  botdata: [],
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
