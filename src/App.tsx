import { FC, useEffect } from "react";
import "./App.css";
import { AppRoute } from "./components/AppRoute";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useActions } from "./hooks/useActions";
import { IUser } from "./types/IUser";

const App: FC = () => {
  const { setUser, setAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <div>
      
          <Layout>
            <Navbar />
            <Content>
              <AppRoute />
            </Content>
          </Layout>
      
    </div>
  );
};

export default App;
