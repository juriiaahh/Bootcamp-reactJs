import React from "react";

const contextData = React.createContext({
  todos: [
    // Initial Data
    "Tes data",
    "Tes data 2",
    "Tes data 3"
  ]
});

export default contextData;
