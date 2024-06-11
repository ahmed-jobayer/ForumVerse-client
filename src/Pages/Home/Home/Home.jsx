import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Announcements from "../Announcements/Announcements";
import Tags from "../Tags/Tags";
import PostCard from "../PostCard/PostCard";
import usePosts from "../../../hooks/usePosts";
import Button from "../../../Shared/Button/Button";
import { useState } from "react";

const Home = () => {
  const [sortType, setSortType] = useState("");
  const [posts, , refetch] = usePosts(sortType);
  // console.log(posts.length);

  const handleSortByPopularity = (e) => {
    e.preventDefault();
    setSortType("popularity");
    refetch();
  };

  const first5Post = posts.slice(0, 5);

  return (
    <div className="mt-10">
      <Helmet>
        <title>Forum Verse - Home</title>
      </Helmet>
      <Banner></Banner>
      <Tags></Tags>
      <Announcements></Announcements>

      <h2 className="text-center mt-4 text-3xl">Posts</h2>
      <div className="flex justify-center mt-4">
        <div className="inline" onClick={handleSortByPopularity}>
          <Button buttonText="Sort by Popularity"></Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10 ">
        {first5Post.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
