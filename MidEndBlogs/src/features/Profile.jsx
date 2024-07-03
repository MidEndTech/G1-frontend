import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Tooltip } from "react-tooltip";
import { ImExit } from "react-icons/im";

const host = import.meta.env.VITE_SERVER_HOST;
const port = import.meta.env.VITE_SERVER_PORT;

function Profile() {
  const [records, setRecords] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    const token = Cookies.get("token");
    const res = await fetch(`http://${host}:${port}/api/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      Cookies.remove("token");
      navigate("/");
    }
  }

  return (
    <>
      <div className="flex-grow h-fit flex flex-col gap-8 p-8">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
          />
          <p className="text-lg font-bold mt-4">{"User's"} Name Variable</p>
        </div>

        <hr className="border-2 w-full" />

        <div className="flex flex-col ">
          <p className="text-lg font-bold">Profile details</p>
          <section className="border-2 border-gray-300 mt-4 p-4 min-w-64">
            <p className="mb-2">
              <span className="font-semibold">Full Name:</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Bio:</span>
            </p>
          </section>
        </div>

        <div className="flex flex-col">
          <p className="text-lg font-bold">Posts</p>
          <section className="border-2 border-gray-300 mt-4 p-4 min-w-70">
            <p className="mb-2">1</p>
            <p className="mb-2">2</p>
            <p className="mb-2">3</p>
          </section>
        </div>

        <div className="flex justify-end">
          <section className="w-1/6 bg-opacity-25 p-4">
            <section className="mt-3 px-5 py-1 ">
              <a className="my-anchor-element ">
                <button
                  onClick={handleLogout}
                  className="flex gap-2 text-red-600 font-bold"
                >
                  <ImExit size={24} /> <span>LOG OUT</span>
                </button>
              </a>
            </section>
            <Tooltip anchorSelect=".my-anchor-element" place="top">
              See you soon!
            </Tooltip>
          </section>
        </div>
      </div>
    </>
  );
}

export default Profile;
