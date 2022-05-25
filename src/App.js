import './App.css';

function App() {
  const title = "halo selamat belajar react";
  const likes = 50;
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Likes = {likes}</p>
        <p>{10}</p>
        <p>{[1,2,3,4,]}</p>
        <p>{Math.random() * 2}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
