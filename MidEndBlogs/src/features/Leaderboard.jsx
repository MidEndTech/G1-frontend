import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function Leaderboard() {
  const [activeTab, setActiveTab] = useState("likes");

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
                    ? "active bg-primary text-white rounded-sm p-2.5"
                    : "hover:bg-gray-200 p-1"
                }`}
                onClick={(left) => handleTabClick("likes")}
              >
                Most liked blogs
              </button>
            </li>
            <li className="px-5 py-2">
              <button
                className={`${
                  activeTab === "views"
                    ? "active bg-primary text-white rounded-sm p-2.5"
                    : "hover:bg-gray-200 p-1"
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
        <div className="blog-list">
          {/* Render blogs sorted by likes */}
        </div>
      )}

      {activeTab === "views" && (
        <div className="blog-list">
          {/* Render blogs sorted by views */}
        </div>
      )}
    </>
  );
}

export default Leaderboard;