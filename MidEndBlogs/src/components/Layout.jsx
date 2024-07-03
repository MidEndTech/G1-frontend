import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="mx-auto flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
