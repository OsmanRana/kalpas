import React from "react";
import usePosts from "../../hooks/usePosts";
import HorizontalViewDetails from "./HorizontalViewDetails/HorizontalViewDetails";

const HorizontalView = () => {
  const { posts } = usePosts();
  return (
    <div className="container">
      {posts?.map((post) => (
        <HorizontalViewDetails
          key={post.id}
          post={post}
        ></HorizontalViewDetails>
      ))}
    </div>
  );
};

export default HorizontalView;
