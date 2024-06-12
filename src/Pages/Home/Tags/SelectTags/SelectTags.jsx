
import Select from "react-select";

const options = [
  { value: "android", label: "Android" },
  { value: "ios", label: "iOS" },
  { value: "smartphones", label: "Smartphones" },
  { value: "apps", label: "Apps" },
  { value: "accessories", label: "Accessories" },
  { value: "reviews", label: "Reviews" },
  { value: "camera", label: "Camera" },
  { value: "battery", label: "Battery" },
  { value: "performance", label: "Performance" },
  { value: "software-updates", label: "Software Updates" },
  { value: "comparisons", label: "Comparisons" },
  { value: "troubleshooting", label: "Troubleshooting" },
  { value: "tips-tricks", label: "Tips & Tricks" },
  { value: "news", label: "News" },
  { value: "security", label: "Security" },
  { value: "custom-roms", label: "Custom ROMs" },
  { value: "rooting", label: "Rooting" },
  { value: "warranty", label: "Warranty" },
  { value: "5g", label: "5G" },
  { value: "design", label: "Design" },
];

const SelectTags = ({ selectedOptions, handleChange, message }) => {
  return (
    <div>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
      />
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default SelectTags;

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleChange = (selected) => {
//     if (selected.length <= 2) {
//       setSelectedOptions(selected);
//       setMessage(""); // Clear the message when valid selection is made
//     } else {
//       setMessage("You can only select up to 2 tags.");
//     }
//   };

//   return (
//     <div>
//       <Select
//         options={options}
//         isMulti
//         value={selectedOptions}
//         onChange={handleChange}
//       />
//       {message && <p className="text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default Tags;
