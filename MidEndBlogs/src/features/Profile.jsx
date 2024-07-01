import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Profile() {
  const [records, setRecords] = useState([]);

  const [showModal, setShowModal] = React.useState(false);


  /*useEffect(() => {
      fetch('url')
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
  },[])*/

  return (
    <>
    
    <div className="bg-neutral-100 flex flex-col items-center gap-8 p-8">

      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile Image"/>
        <p className="text-lg font-bold mt-4">User's Name Variable</p>
      </div>

      <hr className="border-2 w-full" />

      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Profile details</p>
        <section className="border-2 border-gray-300 mt-4 p-4 min-w-64">
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Username:</span> {}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {}
          </p>
        </section>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Posts</p>
        <section className="border-2 border-gray-300 mt-4 p-4 min-w-70">
          <p className="mb-2">1</p>
          <p className="mb-2">2</p>
          <p className="mb-2">3</p>
        </section>
      </div>

        <div>
          <section className="bg-emerald-300 bg-opacity-25 p-4">
              <p className="font-semibold justify-center flex">Time to go?</p>
                <section className="border-2 rounded-lg border-opacity-85 rad border-gray-500 mt-3 px-5 py-1 ">
                    <button>SIGN OUT</button>
                </section>
          </section>
        </div>

        <div>DELETE ACOOUNT</div>

      {/*<ul>
        {records.map((list, index) => (
          <li key={index}>{list.id} | {list.id}</li>
        ))}
      </ul>*/}
    
    </div>
  
  </>
  );
}

export default Profile;
