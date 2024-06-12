

const First3Post = ({post}) => {

    const {
        postTitle,
        tags,
        postTime,
        comments,
      } = post;

      const newDate = new Date(postTime).toISOString().split("T")[0];

    return (
        <div className=" relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {postTitle}
            </h2>
            <div className="flex justify-between">
              
              <p>Comments: {comments.length}</p>
              <p>Post date: {newDate}</p>
            </div>
            <h4 className="text-center">Tags</h4>
            <ul className="flex justify-evenly">
              {tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>
        </div>
    );
};

export default First3Post;