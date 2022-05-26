import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Halo', body: 'lorem ipsum...', author: 'abi', id: 1 },
        { title: 'Hai', body: 'lorem ipsum...', author: 'tom', id: 2 },
        { title: 'Hola', body: 'lorem ipsum...', author: 'edo', id: 3 }
    ]);
  return (
    <div className="home">
        <div>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Ditulis oleh {blog.author} </p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Home;
