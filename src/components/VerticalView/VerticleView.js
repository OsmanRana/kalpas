import React from "react";
import usePosts from "../../hooks/usePosts";
import VerticleViewDetails from "./VerticleViewdetails/VerticleViewDetails";

const VerticleView = () => {
  const { posts } = usePosts();
  return (
    <div className="container p-5">
      {posts?.slice(0, 5).map((post) => (
        <VerticleViewDetails
          key={post.id}
          post={post}
        ></VerticleViewDetails>
      ))}
    </div>
  );
};

export default VerticleView;
