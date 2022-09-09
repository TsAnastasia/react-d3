import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routers";

const AppOutlet = lazy(() => import("../components/outlets/app/AppOutlet"));
const MainPage = lazy(() => import("../pages/main/MainPage"));
const TreePage = lazy(() => import("../pages/tree/TreePage"));
const TimelinePage = lazy(() => import("../pages/timeline/TimelinePage"));
const TutorialPage = lazy(() => import("../pages/tutorial/TutorialPage"));

const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.MAIN} element={<AppOutlet />}>
      <Route index element={<MainPage />} />
      <Route path={AppRoutes.TREE} element={<TreePage />} />
      <Route path={AppRoutes.TIMELINE} element={<TimelinePage />} />
      <Route path={AppRoutes.TUTORIAL} element={<TutorialPage />} />
      <Route path="*" element={<Navigate to={AppRoutes.MAIN} />} />
    </Route>
  </Routes>
);

export default AppRouter;
