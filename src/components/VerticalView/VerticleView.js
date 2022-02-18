import React from "react";
import usePosts from "../../hooks/usePosts";
import Pagination from "../Pagination/Pagination";
import VerticleViewDetails from "./VerticleViewdetails/VerticleViewDetails";

const VerticleView = () => {
  const { posts } = usePosts();
  return (
    <div className="container p-5 d-flex flex-column align-items-center">
      <div className="row row-cols-1 row-cols-md-3">
        {posts?.slice(0, 6).map((post) => (
          <VerticleViewDetails key={post.id} post={post}></VerticleViewDetails>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default VerticleView;
