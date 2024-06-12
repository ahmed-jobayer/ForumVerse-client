import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";

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

  console.log(posts);

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
      {posts?.length}
    </div>
  );
};

export default MyProfile;
