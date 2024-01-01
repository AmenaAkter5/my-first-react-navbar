import bgImage from "../../../public/assets/images/bg.jpg";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const options = [
    "The Nature Lover",
    "The Photography Crazed Tourist",
    "The Crammer",
  ];

  const handleSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
    // You can perform any actions you want based on the selected option
  };
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(38, 197, 232, 0.14) 0%, rgba(0, 149, 214, 0.14) 100%),url(${bgImage})`,
        }}
      >
        <Navbar options={options} onSelect={handleSelect} />
        <Header options={options} onSelect={handleSelect} />
      </div>
    </>
  );
};

export default Home;
