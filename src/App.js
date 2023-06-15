import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ActionComponent } from "./components/actionComponent";
import { DisplayComponent } from "./components/displayComponent";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ActionComponent />
        <DisplayComponent />
      </Provider>
    </div>
  );
}

export default App;
