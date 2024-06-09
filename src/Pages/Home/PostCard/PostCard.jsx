const PostCard = () => {
  return (
    <div className=" relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border
         text-white shadow-lg shadow-blue-gray-500/40 "
      >
        <img className=" h-full" src="https://imgur.com/KF6P617.png" alt="" />
      </div>
      <div className="p-6">
        <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Tailwind card
        </h2>
        <div className="flex justify-between">
            <img src="" alt="author" />
            <p>time</p>
        </div>
        <div className="flex justify-between">
            <p>c count</p>
            <p>vote count</p>
        </div>
        <p>tags</p>
      </div>
    </div>
  );
};

export default PostCard;
