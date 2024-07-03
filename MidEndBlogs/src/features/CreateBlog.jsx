import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_SERVER_URL;

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCloseForm = () => {
    navigate("/blogs");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blog = { title, content };
    const token = Cookies.get("token");
    const res = await fetch(`${url}/posts/store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    if (res.status === 200) handleCloseForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200/70">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
        <button
          onClick={handleCloseForm}
          className="absolute top-2 right-2 text-primary hover:text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter Title."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter content..."
              cols={10}
              rows={8}
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
