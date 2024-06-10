const Announcement = ({announcement}) => {
  return (
    <div className="flex items-center p-3 w-full h-28 bg-base-200 rounded-md shadow-lg">
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src={announcement.authorImage} />
        </div>
      </div>
      <section className="block border-l border-gray-300 m-3">
        <div className="pl-3">
          <h3 className="text-gray-400 font-semibold text-sm">{announcement.authorName}</h3>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#6b7989] to-[#cecee2] text-lg font-bold">
            {announcement.title}
          </h3>
        </div>
        <p className="pl-3">{announcement.description}</p>
      </section>
    </div>
  );
};

export default Announcement;
