import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Header.css";
import { coupleOptions, travellerTypeOptions } from "./options";
// import { HiOutlineChevronDown } from "react-icons/hi";

const Header = ({ onSelect }) => {
  const [isTravellerTypeOpen, setIsTravellerTypeOpen] = useState(false);
  const [isCoupleOpen, setIsCoupleOpen] = useState(false);
  const travellerTypeDropdownRef = useRef(null);
  const coupleDropdownRef = useRef(null);

  useOutsideClick(travellerTypeDropdownRef, () => {
    setIsTravellerTypeOpen(false);
  });
  useOutsideClick(coupleDropdownRef, () => {
    setIsCoupleOpen(false);
  });

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsTravellerTypeOpen(false);
  };

  // const handleCoupleOptionClick = (option) => {
  //   onSelect(option);
  //   setIsCoupleOpen(false);
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto flex justify-between items-center gap-16 text-white my-5 max-w-7xl w-full">
      <div className="text-2xl font-medium">
        Travel <span className=" text-gray-300">App</span>
      </div>
      <div>
        <ul className="flex justify-between gap-6 font-medium text-base bg-white bg-opacity-20 rounded-lg py-2 px-6">
          <li ref={travellerTypeDropdownRef} className="relative">
            <button
              onClick={() => setIsTravellerTypeOpen(!isTravellerTypeOpen)}
              className="flex items-center gap-[6px] cursor-pointer py-1.5 px-2"
            >
              TRAVELLER TYPE{" "}
              <FiChevronDown
                className={` duration-300 transition-all text-xl mt-0.5 ${
                  isTravellerTypeOpen ? "open  rotate-180 " : ""
                }`}
              />
            </button>
            <div
              className={`flex flex-col gap-[6px] absolute border duration-300 transition-all rounded-xl overflow-hidden w-80 px-4 py-4 ${
                isTravellerTypeOpen ? "open-dropdown" : "close-dropdown"
              }`}
            >
              {travellerTypeOptions.map((option, index) => (
                <span
                  className="px-4 text-black"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </li>

          <li ref={coupleDropdownRef} className="relative">
            <button
              onClick={() => setIsCoupleOpen(!isCoupleOpen)}
              className="flex items-center gap-1 cursor-pointer py-1.5 px-2 "
            >
              COUPLE{" "}
              <FiChevronDown
                className={` duration-300 transition-all text-xl mt-0.5 ${
                  isCoupleOpen ? "open  rotate-180 " : ""
                }`}
              />
            </button>

            <div
              className={`flex flex-col gap-1 absolute border duration-300 transition-all rounded-xl overflow-hidden w-80 px-4 py-4 ${
                isCoupleOpen ? "open-dropdown" : "close-dropdown"
              }`}
            >
              {coupleOptions.map((option, index) => (
                <span
                  className="px-4 text-black cursor-pointer"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  {/* Check the type of content to render */}
                  {option.type === "button" && (
                    <button onClick={() => option.onClick(option)}>
                      {option.label}
                    </button>
                  )}
                  {option.type === "link" && (
                    <a href={option.to}>{option.label}</a>
                  )}
                  {option.type === "text" && <p>{option.label}</p>}
                  {/* You can add more conditions based on your needs */}
                </span>
              ))}
            </div>
          </li>

          <li>
            <button className="flex items-center gap-1 cursor-pointer py-1.5 px-2 ">
              Program <FiChevronDown className="text-2xl pt-1" />
            </button>
          </li>

          <li>
            <button className="flex items-center gap-1 cursor-pointer py-1.5 px-2 ">
              MOUNTAINING <FiChevronDown className="text-2xl pt-1" />
            </button>
          </li>
          <li>
            <button className="flex items-center gap-1 cursor-pointer py-1.5 px-2 ">
              SET LOCATION <FiChevronDown className="text-2xl pt-1" />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p className="">My Acoount</p>
      </div>
    </nav>
  );
};

Header.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Header;
