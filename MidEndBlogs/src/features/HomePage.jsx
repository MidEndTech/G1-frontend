import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      HomePage .
      <Link to="signup" className="m-2 text-blue-600 underline ">
        Signup
      </Link>
    </div>
  );
}

export default HomePage;
