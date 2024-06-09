import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
// import PostCard from "../PostCard/PostCard";

const Home = () => {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Forum Verse - Home</title>
      </Helmet>
      <Banner></Banner>
      {/* <PostCard></PostCard> */}
    </div>
  );
};

export default Home;
