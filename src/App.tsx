import { FC } from "react";
import "./App.css";
import { AppRoute } from "./components/AppRoute";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Content>
              <AppRoute />
            </Content>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
