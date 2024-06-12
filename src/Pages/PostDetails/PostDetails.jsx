import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import Button from "../../Shared/Button/Button";
const PostDetails = () => {
  const { user } = useAuth();
  const post = useLoaderData();
  console.log(post)
  const axiosPublic = useAxiosPublic();
  const [voted, setVoted] = useState({ upvoted: false, downvoted: false });
  const [updatedCounts, setUpdatedCounts] = useState({
    upVoteCount: post.upVoteCount,
    downVoteCount: post.downVoteCount,
  });
  const [comment, setComment] = useState("");
  const [commentCount, setCommentCount] = useState(post?.comments?.length);
  console.log(post)

  useEffect(() => {
    setCommentCount(post.comments.length);
  }, [post?.comments?.length]);
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const {
    _id,
    authorImage,
    authorName,
    postTitle,
    postDescription,
    tags,
    postTime,
  } = post;

  //   console.log(post)

  const newDate = new Date(postTime).toISOString().split("T")[0];

  const notify = (message) => toast(message);

  const handleUpvote = async () => {
    if (!voted.upvoted) {
      try {
        await axiosPublic.patch(`/posts/${_id}/upvote`);
        setVoted({ ...voted, upvoted: true });

        const updatedPost = await axiosPublic.get(`/posts/${_id}`);
        const { upVoteCount, downVoteCount } = updatedPost.data;
        setUpdatedCounts({ upVoteCount, downVoteCount });
      } catch (error) {
        console.error("Error upvoting:", error);
      }
    } else {
      notify("You have already upvoted this post.");
      //   console.log("You have already upvoted this post.");
    }
  };

  const handleDownvote = async () => {
    if (!voted.downvoted) {
      try {
        await axiosPublic.patch(`/posts/${_id}/downvote`);
        setVoted({ ...voted, downvoted: true });

        const updatedPost = await axiosPublic.get(`/posts/${_id}`);
        const { upVoteCount, downVoteCount } = updatedPost.data;
        setUpdatedCounts({ upVoteCount, downVoteCount });
      } catch (error) {
        console.error("Error downvoting:", error);
      }
    } else {
      notify("You have already downvoted this post.");
      //   console.log("You have already downvoted this post.");
    }
  };

  const handleCommentSubmit = async () => {
    if (!comment) {
      notify("Comment cannot be empty.");
      return; 
    }

    try {
      const newComment = { comment };
      const response = await axiosPublic.patch(
        `/posts/${post._id}/comments`,
        newComment
      );

      if (response.status >= 200 && response.status < 300) {
        setComment("");
        setCommentCount(commentCount + 1);
        notify("Comment added");
      } else {
        notify("Failed to add comment. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      notify("Failed to add comment. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex w-3/4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <ToastContainer />
        <div className="p-6">
          <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {postTitle}
          </h2>
          <div className="flex justify-between">
            <img src={authorImage} alt={authorName} />
            <p>Post date: {newDate}</p>
          </div>
          <div>
            <h4 className="my-2">postDescription:</h4>
            {postDescription}
          </div>
          <div className="flex flex-col justify-start mt-2">
            <h4 className="">Tags</h4>
            <ul className="flex  gap-4">
              
              {tags?.length && tags?.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-4">
              <div className="flex gap-1 items-center">
                <FaComment className="cursor-pointer" /> {commentCount}
              </div>
              {user && (
                <div>
                  <textarea
                    className="textarea textarea-bordered border-black bg-white"
                    placeholder="Enter your comment here."
                    value={comment}
                    onChange={handleCommentChange}
                  ></textarea>
                  <div onClick={handleCommentSubmit}>
                    <Button buttonText={"Comment"}></Button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-4">
              <p className="flex gap-1 items-center">
                <BiSolidUpArrow
                  onClick={handleUpvote}
                  className="cursor-pointer"
                />{" "}
                {updatedCounts.upVoteCount}
              </p>
              <p className="flex gap-1 items-center">
                <BiSolidDownArrow
                  onClick={handleDownvote}
                  className="cursor-pointer"
                />{" "}
                {updatedCounts.downVoteCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
