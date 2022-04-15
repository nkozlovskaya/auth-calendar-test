import { Header } from "antd/lib/layout/layout";
import { Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/redusers/auth/action-creators";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Nadezhda Kozlovskaya</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => dispatch(AuthActionCreators.logout())}
                key={1}
              >
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
