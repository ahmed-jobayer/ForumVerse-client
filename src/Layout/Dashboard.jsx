import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
   <div>
        <Navbar></Navbar>
     <div className="flex mt-4">
      <div className="w-1/4 bg-[#1089D3] min-h-screen rounded-t-xl">
        <ul className="menu gap-2">
            <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
            <li><NavLink to='/dashboard/myProfile'> Add Post</NavLink></li>
            <li><NavLink to='/dashboard/myProfile'>My Posts</NavLink></li>
        </ul>
      </div>
      <div className="w-3/4 m-4">
        <Outlet></Outlet>
      </div>
    </div>
   </div>
  );
};

export default Dashboard;
