import React from "react";
import usePosts from "../../hooks/usePosts";
import HorizontalViewDetails from "./HorizontalViewDetails/HorizontalViewDetails";

const HorizontalView = () => {
  const { posts } = usePosts();
  return (
    <div className="container p-5">
      {posts?.slice(0, 5).map((post) => (
        <HorizontalViewDetails
          key={post.id}
          post={post}
        ></HorizontalViewDetails>
      ))}
    </div>
  );
};

export default HorizontalView;
