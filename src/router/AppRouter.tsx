import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routers";

const AppOutlet = lazy(() => import("../components/outlets/app/AppOutlet"));
const HomePage = lazy(() => import("../pages/home/HomePage"));

const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<AppOutlet />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Navigate to={AppRoutes.HOME} />} />
    </Route>
  </Routes>
);

export default AppRouter;
