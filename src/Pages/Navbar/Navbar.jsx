import { Link, NavLink } from "react-router-dom";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";


const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Membership</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <RiMenu2Fill />

          </div>
          <ul
            tabIndex={0}
            className="gap-2 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center ">
          <img
            className="bg-white rounded-full max-w-10"
            src="https://imgur.com/KF6P617.png"
            alt="Forum Verse"
          />
          <Link className="text-2xl" to="/">
            Forum Verse
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div>
          <Link to='/signUp'>Join Us</Link>
        </div>
        <div className="indicator">
          <IoNotificationsCircleSharp className="text-2xl" />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
