import React, { useContext, useReducer } from "react";
import Store from "./context/context";
import reducer from "./context/reduser";
import { usePersistedContext, usePersistedReducer } from "./context/usePersist";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" 
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </Store.Provider>
  );
}
export default App;
