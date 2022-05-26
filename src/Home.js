// import { useEffect, useState } from "react";
import BlogList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(" http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Judul Buku" />}
    </div>
  );
};

export default Home;
// const{data :namaData ,isPennding,error} = useFetch("http://localhost:8000/blogs");
