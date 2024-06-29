import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
