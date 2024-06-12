import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";
import First3Post from "./First3Post";

const MyProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { user: authUser, loading: authLoading } = useAuth();
  const email = authUser?.email;
  const [user, loading] = useUsers(email);
  const [posts, setPosts] = useState();
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      axiosPublic
        .get(`/posts/${email}`)
        .then((res) => {
          setPosts(res.data);
          setPostsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setPostsLoading(false);
        });
    }
  }, [axiosPublic, email]);

  if (loading || postsLoading) {
    return authLoading;
  }
  const first3Post = posts.slice(0, 3);
 

  console.log(first3Post);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src={user.imageURL}
            alt={user.name}
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
              <p className=" text-xs sm:text-base dark:text-gray-600">
                E-mail: {user.email}
              </p>
            </div>
            <div className="flex justify-center pt-2 ">
              <h4>Badge: {user.badge}</h4>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl mt-4">Recent posts</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {
            first3Post.map((post) => <First3Post
            key={post._id}
            post={post}
            ></First3Post>)
        }
      </div>
    </div>
  );
};

export default MyProfile;
