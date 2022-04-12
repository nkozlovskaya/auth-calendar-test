import { Header } from "antd/lib/layout/layout";
import { Menu, Row } from "antd";
// import MenuItem from "antd/lib/menu/MenuItem";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar = () => {
  let navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Nadezhda Kozlovskaya</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("Logout")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate(RoutesName.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
