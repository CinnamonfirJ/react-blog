// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFecth";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Annie")}
          title="Annie's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
