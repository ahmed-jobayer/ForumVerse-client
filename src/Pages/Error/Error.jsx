import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container mx-auto">
        <section className="flex items-center h-full sm:p-16 bg-base-100 min-h-screen">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <img className="w-[1000px]" src="https://imgur.com/7F8Dq3b.png" alt="" />
            <p className="text-3xl">404, Page Not Found</p>
            <Link to="/" className="px-8 py-3 font-semibold rounded btn">
              Back to homepage
            </Link>
          </div>
        </section>
      </div>
    );
};

export default Error;