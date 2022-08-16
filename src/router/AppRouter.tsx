import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routers";

const AppOutlet = lazy(() => import("../components/outlets/app/AppOutlet"));
const HomePage = lazy(() => import("../pages/home/HomePage"));
const TreePage = lazy(() => import("../pages/tree/TreePage"));
const TutorialPage = lazy(() => import("../pages/tutorial/TutorialPage"));

const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<AppOutlet />}>
      <Route index element={<HomePage />} />
      <Route path={AppRoutes.TREE} element={<TreePage />} />
      <Route path={AppRoutes.TUTORIAL} element={<TutorialPage />} />
      <Route path="*" element={<Navigate to={AppRoutes.HOME} />} />
    </Route>
  </Routes>
);

export default AppRouter;
