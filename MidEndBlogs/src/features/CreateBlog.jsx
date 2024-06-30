import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function NewBlog() {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Add a state to handle visibility
  const navigate = useNavigate();
  function handleClick() {
    navigate("/CreateBlog");
    
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  function handleSubmit (event)  {
    console.log('Text:', text);
    console.log('Content:', content);
    event.preventDefault();
    // Handle form submission logic here
    
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setIsVisible(false); // when user click on post close the page 
    //
  };

  if (!isVisible) return null; // Render nothing if form is closed

  return (
    <div className="fixed flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl h-100 w-96 p-10 relative">
        <button
          onClick={handleCloseForm} // x
          className="absolute top-2 right-2 text-primary "
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-8 text-center text-black">New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <label htmlFor="text" className=" text-sm font-medium ">
              Title
            </label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={handleTextChange}
              className="mt-1 w-full px-3 py-2 border border-gray-350 rounded-lg shadow-sm focus:outline-none focus:border-primary sm:text-sm"
              placeholder="Enter Title.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="mt-1 w-full px-3 py-2 border border-gray-350 rounded-lg shadow-sm focus:outline-none focus:border-primary sm:text-sm"
              placeholder="Enter content..."
            />
          </div>
          <button
            
            className="w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary "
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;

