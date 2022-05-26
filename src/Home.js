import { useState } from "react";
import BlogList from "./BlogsList";

const Home = () => {
    const [blogs] = useState([
        { title: 'Ada apa dengan abi', body: 'lorem ipsum...', author: 'abi', id: 1 },
        { title: 'Ada apa dengan tom', body: 'lorem ipsum...', author: 'tom', id: 2 },
        { title: 'Ada apa dengan edo', body: 'lorem ipsum...', author: 'edo', id: 3 }
    ]);
  return (
    <div className="home">
        <BlogList blogs={blogs} title="Judul Buku"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'abi')} title="Blog abi"/>
    </div>
  );
};

export default Home;

//<BlogList keyProperty={data} />   
