import React from "react";
import usePosts from "../../hooks/usePosts";
import VerticleViewDetails from "./VerticleViewdetails/VerticleViewDetails";

const VerticleView = () => {
  const { posts } = usePosts();
  return (
    <div className="container p-5">
      <div className="row row-cols-1 row-cols-md-3">
        {posts?.slice(0, 6).map((post) => (
          <VerticleViewDetails key={post.id} post={post}></VerticleViewDetails>
        ))}
      </div>
    </div>
  );
};

export default VerticleView;
