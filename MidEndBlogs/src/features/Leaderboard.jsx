import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_SERVER_URL;

function Leaderboard() {
  const [activeTab, setActiveTab] = useState("likes");
  const [likesData, setLikesData] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  useEffect(() => {
    const token = Cookies.get("token");
    async function fetchAPI() {
      if (activeTab === "likes") {
        const res = await fetch(`${url}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLikesData(await res.json().data);
      } else {
        const res = await fetch(`${url}/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setViewsData(await res.json().data);
      }
    }
    fetchAPI();
  });
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs">
        <nav className="tab-nav border-b text-primary font-semibold text-lg w-full p-2 m-2">
          <ul className="tab-list flex justify-center rounded-2xl">
            <li className="px-5 py-2">
              <button
                className={`${
                  activeTab === "likes"
                    ? "active bg-primary text-white rounded-sm p-3"
                    : "hover:bg-gray-200 p-3"
                }`}
                onClick={() => handleTabClick("likes")}
              >
                Most liked blogs
              </button>
            </li>
            <li className="px-5 py-2">
              <button
                className={`${
                  activeTab === "views"
                    ? "active bg-primary text-white rounded-sm p-3"
                    : "hover:bg-gray-200 p-3"
                }`}
                onClick={() => handleTabClick("views")}
              >
                Most viewed blogs
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {activeTab === "likes" && (
        <div className="blog-list">{/* Render blogs sorted by likes */}</div>
      )}

      {activeTab === "views" && (
        <div className="blog-list">{/* Render blogs sorted by views */}</div>
      )}
    </>
  );
}

export default Leaderboard;
