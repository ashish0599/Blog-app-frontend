import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from "../SinglePost/SinglePost";
import "./Single.css";

function Single() {
  return (
    <div className="single">
     <Sidebar />
      <SinglePost />
</div>
  );
}

export default Single;
