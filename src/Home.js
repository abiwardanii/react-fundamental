const Home = () => {
  const handleClick = (e) => {
    console.log("clicked",e);
  };

  const handleCLickAgain = (name,e) => {
    console.log("Halo " + name, e.target);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleCLickAgain("abi",e);
        }}
      >
        Click again
      </button>
    </div>
  );
};

export default Home;
