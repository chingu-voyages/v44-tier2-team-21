import React, { createContext, useReducer, useState, useMemo } from "react";
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

  const contextValue = useMemo(() => {
    return {
      botdata: mainState.botdata,
      setMainState,
      mainState,
    };
  }, [mainState]);

  return (
    <BotContext.Provider value={contextValue}>{children}</BotContext.Provider>
  );
};
