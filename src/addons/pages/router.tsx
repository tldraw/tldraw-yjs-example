import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import RoomPage from "./RoomPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shared/:id/*",
    element: <RoomPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
