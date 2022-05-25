const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleCLickAgain = (name) => {
    console.log("Halo " + name);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleCLickAgain("abi");
        }}
      >
        Click again
      </button>
    </div>
  );
};

export default Home;
