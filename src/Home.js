import { useEffect, useState } from "react";
import BlogList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    },[]);

  return (
    <div className="home">
        {blogs && <BlogList blogs={blogs} title="Judul Buku"/>}
    </div>
  );
};

export default Home;

//<BlogList keyProperty={data} />   
