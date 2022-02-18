import React from "react";
import usePosts from "../../hooks/usePosts";
import Pagination from "../Pagination/Pagination";
import HorizontalViewDetails from "./HorizontalViewDetails/HorizontalViewDetails";

const HorizontalView = () => {
  const { posts } = usePosts();
  return (
    <div className="container p-5 d-flex flex-column align-items-center ">
      <div>
        {posts?.slice(0, 5).map((post) => (
          <HorizontalViewDetails
            key={post.id}
            post={post}
          ></HorizontalViewDetails>
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default HorizontalView;
