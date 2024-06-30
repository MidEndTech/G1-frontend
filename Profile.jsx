import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile(){

    const [records, setRecords] = useState([])

    {/*useEffect(() => {
        fetch('url')
        .then(res => res.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])*/}


    return(
        <div className="bg-neutral-100">
        
            <div className="justify-center flex w-80">
            <img className="w-16 justify-center flex
            min-w-96
            lg:w-96
            mt-14-
            
            mx-auto
            rounded-full"
            src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1024x538.png"/>
            <br /> Name
            </div>
            
            <hr className="mt-5 border-2"/>

            <div className="mt-10 justify-center flex">
                Profile <br />
                <section className="border-solid border-2 border-gray-300 w-96 mt-10 p-3">
                  <p className="p-1">Name:</p>
                  <p className="p-1">UserName:</p>
                  <p className="p-1">Email:</p>

                </section>
            </div>


            <div className="mt-10 justify-center flex">
                Posts
                <section className="border-solid border-2 border-gray-300 w-9/12 mt-10 p-3 pb">
                    <p className="p-1">1</p>
                    <p className="p-1">2</p>
                    <p className="p-1"></p>
                </section>
            </div>


        {/*<ul>
        {records.map((list, index) => (
            <li key={index }>{list.id} | {list.id}</li>
        )
    )}
        </ul>*/}

        </div>
    );
};

export default Profile;