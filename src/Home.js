import { useState } from "react";

const Home = () => {
  //   let name = "abi";
  const [name, setName] = useState("abi"); //destructuring
  const [age, setAge] = useState(20);

  const handleClick = () => {
      setName('wardani');
      setAge(30);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>Umur {name} sekarang {age} tahun</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
