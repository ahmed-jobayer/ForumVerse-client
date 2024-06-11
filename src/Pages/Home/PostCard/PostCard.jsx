import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const {
    _id,
    authorImage,
    authorName,
    postTitle,
    tags,
    postTime,
    comments,
    upVoteCount,
    downVoteCount,
  } = post;

  const voteCount = upVoteCount - downVoteCount;
  const newDate = new Date(postTime).toISOString().split("T")[0];

  return (
    <div className="flex justify-center">
      <Link to={`/posts/${_id}`}>
        <div className=" relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {postTitle}
            </h2>
            <div className="flex justify-between">
              <img src={authorImage} alt={authorName} />
              <p>Post date: {newDate}</p>
            </div>
            <div className="flex justify-between">
              <p>Comments: {comments.length}</p>
              <p>Vote count: {voteCount}</p>
            </div>
            <h4 className="text-center">Tags</h4>
            <ul className="flex justify-evenly">
              {tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
