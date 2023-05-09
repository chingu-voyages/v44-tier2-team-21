import React, { createContext, useReducer, useState } from "react";
import BotReducer from "./BotReducer";

// DUMMY DATA
const initialstate = {
  botdata: [
    {
      id: 1,
      name: "Phil",
      bool: 0,
      initDirection: "west",
    },
    {
      id: 2,
      name: "Phil",
      bool: 1,
      initDirection: "north",
    },
    {
      id: 3,
      name: "Phil",
      bool: 0,
      initDirection: "south",
    },
  ],
};

// CONTEXT
export const BotContext = createContext(initialstate);

// PROVIDER
export const BotProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(BotReducer, initialstate);
  const [mainState, setMainState] = useState(initialstate);
  return (
    <BotContext.Provider
      value={{
        botdata: mainState?.botdata,
        setMainState,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};
