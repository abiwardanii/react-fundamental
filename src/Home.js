import { useEffect, useState } from "react";
import BlogList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch blogs");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null)
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Judul Buku" />}
    </div>
  );
};

export default Home;

//<BlogList keyProperty={data} />
