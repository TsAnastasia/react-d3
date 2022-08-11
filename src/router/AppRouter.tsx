import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routers";

const AppOutlet = lazy(() => import("../components/outlets/app/AppOutlet"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const TreePage = lazy(() => import("../pages/tree/TreePage"));
const TimelinePage = lazy(() => import("../pages/timeline/TimelinePage"));

const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<AppOutlet />}>
      <Route index element={<HomePage />} />
      <Route path={AppRoutes.TREE} element={<TreePage />} />
      <Route path={AppRoutes.TIMELINE} element={<TimelinePage />} />
      <Route path="*" element={<Navigate to={AppRoutes.HOME} />} />
    </Route>
  </Routes>
);

export default AppRouter;
