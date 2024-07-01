import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SidebarLink({ name, path, icon }) {
  const { pathname } = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setCurrentLocation(pathname.split("/")[1]);
    setIsActive(currentLocation == path);
  }, [path, currentLocation, pathname]);

  return (
    <li id={path}>
      <Link
        to={`/${path}`}
        className={`flex gap-2 p-4 rounded-lg ${
          isActive
            ? "bg-active-background text-active-text"
            : "hover:bg-gray-100"
        }`}
      >
        <div>{icon}</div>
        <span className="font-bold">{name}</span>
      </Link>
    </li>
  );
}

export default SidebarLink;
