import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaCommentAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";


const MyPosts = () => {
  const axiosPublic = useAxiosPublic();
  const { user: authUser, loading: authLoading } = useAuth();
  const email = authUser?.email;
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

  if (postsLoading) {
    return authLoading;
  }
//   console.log(posts);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Post Title</th>
              <th> Number of votes</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
                posts.map((post, index) =><tr
                className="hover"
                key={post._id}
                >
                <th>{index + 1}</th>
                <td>{post.postTitle}</td>
                <td>{post.upVoteCount + post.downVoteCount}</td>
                <td><FaCommentAlt className="text-xl cursor-pointer"/></td>
                <td><TiDelete className="text-3xl cursor-pointer"/></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPosts;
