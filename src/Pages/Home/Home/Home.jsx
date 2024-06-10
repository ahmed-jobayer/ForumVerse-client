import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Announcements from "../Announcements/Announcements";
// import PostCard from "../PostCard/PostCard";

const Home = () => {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Forum Verse - Home</title>
      </Helmet>
      <Banner></Banner>

      {/* <PostCard></PostCard> */}
      <Announcements></Announcements>
    </div>
  );
};

export default Home;
