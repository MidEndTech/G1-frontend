import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import BlogCard from "../components/BlogCard";

function Leaderboard() {
  const [activeTab, setActiveTab] = useState("likes");
  const [likesData, setLikesData] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  useEffect(() => {
    const token = Cookies.get("token");
    async function fetchAPI() {
      const likesRes = await fetch("https://group-one.midend.tech/api/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const tempLikes = await likesRes.json();
      setLikesData(tempLikes.data);

      const viewsRes = await fetch("https://group-one.midend.tech/api/viewer", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const tempViews = await viewsRes.json();
      setViewsData(tempViews.data);
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
        <div className="flex gap-2">
          {likesData &&
            likesData.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                likes={blog.Likes}
                views={blog.unique_views_count}
                username={blog.username}
              />
            ))}
        </div>
      )}

      {activeTab === "views" && (
        <div className="flex gap-2">
          {viewsData &&
            viewsData.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                likes={blog.Likes}
                views={blog.unique_views_count}
                username={blog.username}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Leaderboard;
