import { useState } from "react";


const JobCartDropDown = ({data,style}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
        <select
            value={selectedOption}
            onChange={handleSelectChange}
            className={`${style}`}
          >
            {data.map((val, index) => (
              <option key={index} value={val.item}>
                {val.item}
              </option>
            ))}
          </select>             
    </div>
  );
};

export default JobCartDropDown;
