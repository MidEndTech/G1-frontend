import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import Cookies from "js-cookie";
const host = import.meta.env.SERVER_HOST;
const port = import.meta.env.SERVER_PORT;

function Login() {

  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const user = {
    email: String,
    password: String,
  };

  const fetchAPI = async () => {
    const res = await fetch(`http://${host}:${port}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 200){
      const data = await res.json();
        const token = data.token;

        Cookies.set("token", token, { expires: 2 });
        navigate("/home");
    } 
    else if(res.status === 401){
      setIsError(true);
      setError("Invalid email or password. Please try again");
    }
    
    else{
      setIsError(true);
        setError("Something went wrong. Please try again");
    };

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      user.email = e.target.email.value;
      user.password = e.target.password.value;
    }

    await fetchAPI();
  };
  return (
    <div className="w-screen min-h-screen bg-neutral-100">
      <p className="text-4xl font-bold text-gray-700 text-center pt-40 mb-8">
        Mid End Tech Blog
      </p>
      <div className="flex justify-center items-center">
        <section className="w-1/4 px-16 py-8 bg-white rounded-2xl shadow-2xl">
          <p className="text-center text-xl mb-8 font-semibold">Log In</p>
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
              placeholder="Enter email..."/>
            
            <Input
              title="Password"
              type="password"
              name="password"
              placeholder="Enter password..."
            />
            <button className="p-2 bg-primary text-center text-white mt-8 rounded-full shadow-lg">
              LOG IN
            </button>
            <Link to="/signup" className="font-semibold text-center mt-4">
              You dont'have an account? Sign up
            </Link>
            <Link className="font-medium text-center mt-2">Forgot password? </Link>

          </form>
        </section>
      </div>
    </div>
  );
}


export default Login;
