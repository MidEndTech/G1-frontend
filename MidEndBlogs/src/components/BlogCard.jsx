// eslint-disable-next-line react/prop-types
function BlogCard({ title, content, likes, views }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-9 m-1 px-3 py-3">
      <h3 className="text-xl font-bold ">{title}</h3>
      <p className="text-gray-700 my-2 text-sm text-pretty">
        {/* eslint-disable-next-line react/prop-types*/}
        {content.substring(0, 80)}...
      </p>
      <div className="flex justify-between items-center mt-4"></div>
    </div>
  );
}

export default BlogCard;
