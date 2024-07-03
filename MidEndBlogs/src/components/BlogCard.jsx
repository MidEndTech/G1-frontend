import { FaHeart, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BlogCard({ id, title, content, username, likes, views }) {
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/blogs/${id}`);
  }

  return (
    <div
      onClick={handleCardClick}
      className="  border border-gray-300 rounded-lg shadow-md p-9 m-1 px-3 py-3 cursor-pointer"
    >
      <h3 className="text-xl font-bold">
        {title} <span className="opacity-50 text-sm">{username}</span>
      </h3>
      <p className="text-gray-600 my-2 text-sm text-pretty">
        {/* eslint-disable-next-line react/prop-types*/}
        {content.substring(0, 80)}...
      </p>
      <div className="flex flex-row justify-end mt-4 gap-2">
        <div className="flex flex-row gap-1 text-base items-center text-gray-500">
          <FaHeart size={20} />
          <span>{likes}</span>
        </div>
        <div className="flex flex-row gap-1 text-base items-center text-gray-500">
          <FaRegEye size={20} /> <span>{views}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
