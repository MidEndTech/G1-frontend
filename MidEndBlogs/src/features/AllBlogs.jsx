import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function AllBlogs() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    async function fetchAPI() {
      const res = await fetch(
        "https://group-one.midend.tech/api/posts/recent",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const currentData = await res.json();
      setData(currentData.data);
    }
    fetchAPI();
  }, []);

  const handleNewBlogClick = () => {
    navigate("/blogs/createblog");
  };

  return (
    <div className="font-semibold px-14 text-4xl py-10 text-nowrap text-left leading-6">
      All Blogs
      <div className="font-light px-1 text-base opacity-40 py-4">
        Keep up with {"what's"} happening in our vibrant community.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
        {data &&
          data.map((blog) => (
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
      <div className="w-full">
        <button
          onClick={handleNewBlogClick}
          className="fixed font-normal text-xl p-4 px-10 bg-primary text-center text-white mt-2 rounded-full shadow-lg bottom-5 right-5"
        >
          New Blog
        </button>
      </div>
    </div>
  );
}

export default AllBlogs;
