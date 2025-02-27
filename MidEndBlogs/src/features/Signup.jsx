import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import Cookies from "js-cookie";

function Signup() {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const user = {
    email: String,
    name: String,
    password: String,
  };

  const fetchAPI = async () => {
    const res = await fetch("https://group-one.midend.tech/api/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      const data = await res.json();
      const token = data.token;
      Cookies.set("token", token, { expires: 2 });
      navigate("/blogs");
    } else if (res.status === 400) {
      setIsError(true);
      setError("Password should be at least 8 characters.");
    } else if (res.status === 409) {
      setIsError(true);
      setError("Already signed email, Please try another one.");
    } else {
      setIsError(true);
      setError("Something went wrong, Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    user.email = e.target.email.value;
    user.name = e.target.name.value;
    user.password = e.target.password.value;

    await fetchAPI();
  };
  return (
    <div className="w-screen min-h-screen bg-neutral-100">
      <p className="text-4xl font-bold text-gray-700 text-center pt-40 mb-8">
        Mid End Tech Blog
      </p>
      <div className="flex justify-center items-center">
        <section className="w-1/4 px-16 py-8 bg-white rounded-2xl shadow-2xl">
          <p className="text-center text-xl mb-8 font-semibold">Sign Up</p>
          {isError && (
            <p className=" bg-red-200 text-red-600 border-l-8 border-red-600 font-roboto font-bold p-4 mb-4">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              title="Email"
              type="email"
              name="email"
              placeholder="Enter email..."
            />
            <Input
              title="Full Name"
              type="text"
              name="name"
              placeholder="Enter full name..."
            />
            <Input
              title="Password"
              type="password"
              name="password"
              placeholder="Enter password..."
            />
            <button className="p-2 bg-primary text-center text-white mt-8 rounded-full shadow-lg">
              SIGN UP
            </button>
            <Link to="/login" className="font-semibold text-center mt-4">
              AlREADY HAVE AN ACCOUNT?
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Signup;
