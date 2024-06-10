const PostCard = ({ post }) => {
  const {
    authorImage,
    authorName,
    postTitle,
    tags,
    postTime,
    commentCount,
    upVoteCount,
    downVoteCount,
  } = post;

  const voteCount = upVoteCount - downVoteCount;
  const newDate = new Date(postTime).toISOString().split("T")[0];

  return (
    <div className="flex justify-center">
      <div className=" relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {postTitle}
          </h2>
          <div className="flex justify-between">
            <img src={authorImage} alt={authorName} />
            <p>{newDate}</p>
          </div>
          <div className="flex justify-between">
            <p>Comments: {commentCount}</p>
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
    </div>
  );
};

export default PostCard;
