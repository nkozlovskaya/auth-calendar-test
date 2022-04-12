import { FC } from "react";
import "./App.css";
import { AppRoute } from "./components/AppRoute";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
