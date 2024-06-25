import { NavLink, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user: authUser, loading: authLoading } = useAuth();
  const email = authUser?.email;
  const [user, loading] = useUsers(email);

  if (loading) {
    return authLoading;
  }

  console.log(user);
  console.log(user.role);

  // if(user.role === 'user')

  return (
    <div className="flex mt-4">
      <div className="w-1/4 bg-[#1089D3] min-h-screen rounded-t-xl">
        {/* {
          user.role 
        } */}
        <ul className="menu gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* user */}
          {user.role === "user" ? (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPost"> Add Post</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myPosts">My Posts</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">Admin Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPost"> Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myPosts">
                  Reported Comments/Activities
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myPosts">Make Announcement</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-3/4 m-4">
        {/* <div className="flex justify-center items-center min-h-screen">
          Welcome to your Dashboard
        </div> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
