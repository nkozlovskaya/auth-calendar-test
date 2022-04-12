import { Routes, Route } from "react-router-dom";
import Event from "../pages/Event";
import Login from "../pages/Login";
import { publicRoutes, privateRoutes } from "../routes";

export const AppRoute = () => {
  const auth = false;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => {
        <Route
          path={route.path}
          element={route.element}
          //   exact={route.exact}
          key={route.path}
        />;
      })}
      <Route path="*" element={<Event />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        <Route
          path={route.path}
          element={route.element}
          //   exact={route.exact}
          key={route.path}
        />;
      })}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
