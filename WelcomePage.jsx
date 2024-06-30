import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className=" bg-neutral-100 justify-center flex items-center w">
    
    <section className="inline-flex m-20 min-h-max">
      <img className="w-16 md:w-96 lg:w-96" src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1024x538.png"/>
    </section>

    <section className="inline-flex w-16 md:w-96 lg:w-96 ">
      <div className=" min-h-screen">
        <h3 className="text-4xl font-bold text-gray-700 text-center pt-40 mt-24 mb-4"> MID END TECH BLOG</h3>
        <p className="text-xl font-light text-gray-700 text-center pt-30 mb-4">A blog platform for the Tech-obsessed. <br />Post articales and connect with others!</p>
         
           <div className="justify-center flex">
            <Link to="/signup" className="mr-5 w-full font-bold p-2 bg-primary text-center text-white mt-8 rounded-full shadow-lg">SIGN UP</Link>
            <br /> 
            <Link to="/login" className="mr-5 w-80 font-bold p-2 bg-primary text-center text-white mt-8 rounded-full shadow-lg"><button> LOG IN</button></Link>
          </div>
      </div>
    </section>
    
    </div>
        
  );
}

export default WelcomePage;
