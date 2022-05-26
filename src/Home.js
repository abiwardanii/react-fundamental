import { useEffect, useState } from "react";
import BlogList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Ada apa dengan abi', body: 'lorem ipsum...', author: 'abi', id: 1 },
        { title: 'Ada apa dengan tom', body: 'lorem ipsum...', author: 'tom', id: 2 },
        { title: 'Ada apa dengan edo', body: 'lorem ipsum...', author: 'edo', id: 3 }
    ]);

    const [name, setName] = useState('abi');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran'); // run every time the component is rendered
        console.log(name);  
    },[name]);

  return (
    <div className="home">
        <BlogList blogs={blogs} title="Judul Buku" handleDelete={handleDelete}/>
        <button onClick={() => setName('wardani')} >change name</button>
        <p>{name}</p>
    </div>
  );
};

export default Home;

//<BlogList keyProperty={data} />   
