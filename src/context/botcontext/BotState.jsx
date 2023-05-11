import React, { createContext, useReducer, useState } from "react";
import BotReducer from "./BotReducer";

// DUMMY DATA
const initialstate = {
  botdata: [
    {
      id: 1,
      name: "DESTRUCTIION",
      bool: 0,
      initDirection: "west",
      speed: 2,
      x: 50,
      y: 200,
      color: "blue",
      icon: "",
    },
    {
      id: 2,
      name: "DEATH BOT",
      bool: 1,
      initDirection: "north",
      speed: 1,
      x: 400,
      y: 200,
      color: "red",
      icon: "",
    },
  ],
};

// CONTEXT
export const BotContext = createContext(initialstate);

// PROVIDER
export const BotProvider = ({ children }) => {
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
