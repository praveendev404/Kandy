import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import "./index.css";
import { makeAppContext } from "./redux/props/makeAppContext";
import { PropsContext } from "./redux/props/propsContext";

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

ReactDOM.render(
  <Provider store={store}>
    <PropsContext.Provider value={makeAppContext()}>
      <App />
    </PropsContext.Provider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.unregister();
