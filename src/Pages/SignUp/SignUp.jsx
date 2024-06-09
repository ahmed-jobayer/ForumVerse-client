import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () =>{
    googleSignIn()
  }

  const {
    register, handleSubmit, formState: { errors },} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center p-2">
      <div className="max-w-md  bg-base-100 rounded-2xl p-6 border border-white shadow-lg mx-auto mt-5">
        <div className="text-center font-extrabold text-2xl text-[#1089D3]">
          Sign Up
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <input
            {...register("name", { required: true })}
            className="w-full bg-white border-none py-3 px-5 rounded-xl mt-4 shadow-inner border-2 border-transparent focus:outline-none focus:border-[#12B1D1] placeholder-gray-400"
            type="name"
            name="name"
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="text-red-400">This field is required</span>
          )}
          <input
            {...register("email", { required: true })}
            className="w-full bg-white border-none py-3 px-5 rounded-xl mt-4 shadow-inner border-2 border-transparent focus:outline-none focus:border-[#12B1D1] placeholder-gray-400"
            type="email"
            name="email"
            placeholder="E-mail"
          />
          {errors.email && (
            <span className="text-red-400">This field is required</span>
          )}
          <input
            {...register("password", { required: true })}
            className="w-full bg-white border-none py-3 px-5 rounded-xl mt-4 shadow-inner border-2 border-transparent focus:outline-none focus:border-[#12B1D1] placeholder-gray-400"
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-400">This field is required</span>
          )}
          <input
            className="block w-full font-bold bg-gradient-to-r from-[#1089D3] to-[#12B1D1] text-white py-3 mt-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            type="submit"
            value="Sign In"
          />
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-gray-400">
            Or Sign in with
          </span>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={handleGoogleSignIn} className="w-full bg-gradient-to-r from-black to-gray-700 border-4 border-white p-1 rounded-full h-12 grid place-content-center shadow-lg transition-transform transform hover:scale-110 active:scale-90">
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
        <span className="block text-center mt-4">
          <span className="text-xs text-[#0099ff] no-underline">
            Already have an account{" "}
            <Link to="/signIn" className="link link-primary ml-2">
              Sign In Now
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
