import React from "react";
import { TodoProvider } from "./component/Context";
import List from "./component/List";

function App() {
  return (
    <TodoProvider>
      <List />
    </TodoProvider>
  );
}

export default App;
