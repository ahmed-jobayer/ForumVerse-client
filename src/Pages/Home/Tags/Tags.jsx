import Button from "../../../Shared/Button/Button";

const Tags = () => {
  const options = [
    "android",
    "ios",
    "smartphones",
    "apps",
    "accessories",
    "reviews",
    "camera",
    "battery",
    "performance",
    "software-updates",
    "comparisons",
    "troubleshooting",
    "tips-tricks",
    "news",
    "security",
    "custom-roms",
    "rooting",
    "warranty",
    "5g",
    "design",
  ];
  return (
    <div>
      <h2 className="text-center text-3xl my-4">Available Tags For Search</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {options.map((tag, index) => (
          <div key={index}>
            <Button buttonText={tag}></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
