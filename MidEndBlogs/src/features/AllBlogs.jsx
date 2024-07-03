import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function AllBlogs() {
  const navigate = useNavigate();

  const handleNewBlogClick = () => {
    navigate("/blogs/createblog");
  };

  const handleCardClick = () => {
    navigate("/blogs/blog");
  };
  const blogPosts = [
    {
      id: 1,
      title: "Hi Im Abeer",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias cum. Unde aperiam placeat dolore, itaque ea natus perferendis, hic autem laborum dicta debitis nobis omnis maiores est, facere odio.",
    },
  ];

  return (
    <div className="font-semibold px-14 text-4xl py-10 text-nowrap text-left leading-6">
      All Blogs
      <div className="font-light px-1 text-base opacity-40 py-4">
        Keep up with {"what's"} happening in our vibrant community.
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer"
        onClick={handleCardClick}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} title={post.title} content={post.content} />
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
