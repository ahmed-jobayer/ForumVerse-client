import { FaSearch } from "react-icons/fa";
import banner from "../../../../src/assets/banner.jpg";
import Button from "../../../Shared/Button/Button";
import { useState } from "react";

const Banner = () => {
  const [searchText, setSearchText] = useState();

  const handleSearch = () => {
    console.log("text", searchText);
  };

  return (

    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="w-3/4">
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full mb-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div onClick={handleSearch}>
            <Button buttonText={<FaSearch></FaSearch>}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
