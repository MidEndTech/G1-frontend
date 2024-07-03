import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

function ShowBlog() {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleLikeClick = async () => {
    const newLikes = liked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setLiked(!liked);
  };
  const handleGoBack = () => {
    navigate("/blogs");
  };

  return (
    <div className={"py-4 "}>
      <h2 className={"text-3xl font-semibold px-8"}>Title</h2>
      <h4 className={"text-xs font-semibold px-10 opacity-40"}>By username</h4>
      <p className={"text-xl font-semibold px-9"}>content</p>
      <div className="">
        <div
          className="flex items-center mr-5 cursor-pointer px-3"
          onClick={handleLikeClick}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`mr-2 px-2 ${liked ? "text-red-500" : "text-gray-500"}`}
          />
          <span>{likes}</span>
        </div>
        <div className="flex items-center mr-5 px-5">
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          <span>{views}</span>
        </div>
      </div>
      <div className="mt-4 px-9">
        <button
          className="fixed font-normal text-xl p-4 px-10 bg-primary text-center text-white mt-2 rounded-full shadow-lg bottom-5 right-5"
          onClick={handleGoBack}>
        <VscArrowLeft className="inline"/> Go back
        </button>
      </div>
    </div>
  );
}

export default ShowBlog;
