import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, emailPasswordSignup } = useAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        const userInfo = {
          name: data.user.displayName,
          email: data.user.email,
          imageURL: data.user.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data.insertedId);
          // console.log(res.data.message);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Registered",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.message) {
            // const mess = res.data.message
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: 'Welcome back',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate('/')
        });
        // console.log(userInfo, data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // email pass signup
  const onSubmit = (data) => {
    console.log(data);
    emailPasswordSignup(data.email, data.password,data.name, data.imageURL)
    .then ((data) => {
      console.log(data)
      const userInfo = {
        name: data.user.displayName,
        email: data.user.email,
        imageURL: data.user.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        // console.log(res.data.insertedId);
        // console.log(res.data.message);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Registered",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/')
      });
    })
    .catch (err => console.log(err))
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
            {...register("imageURL", { required: true })}
            className="w-full bg-white border-none py-3 px-5 rounded-xl mt-4 shadow-inner border-2 border-transparent focus:outline-none focus:border-[#12B1D1] placeholder-gray-400"
            type="imageURL"
            name="imageURL"
            placeholder="Your Image URL"
          />
          {errors.imageURL && (
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
            value="Sign Up"
          />
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-gray-400">
            Or continue with
          </span>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-3/4 bg-gradient-to-r from-black to-gray-700 border-2 border-white p-1 rounded-full h-12 grid place-content-center shadow-lg transition-transform transform hover:scale-110 active:scale-90"
            >
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
