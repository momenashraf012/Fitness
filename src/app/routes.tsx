import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import DesignSystem from "./pages/DesignSystem";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProgramDetail from "./pages/ProgramDetail";
import Trainers from "./pages/Trainers";
import ClassesSchedule from "./pages/ClassesSchedule";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/design-system",
    Component: DesignSystem,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/programs/:programId",
    Component: ProgramDetail,
  },
  {
    path: "/trainers",
    Component: Trainers,
  },
  {
    path: "/classes",
    Component: ClassesSchedule,
  },
  {
    path: "/contact",
    Component: Contact,
  }
]);