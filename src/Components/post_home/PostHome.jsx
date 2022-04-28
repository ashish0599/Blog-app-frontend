import React from "react";
import nodejs from "../../image/nodejs.png";
const PostHome = () => {
  return (
    <>
      <div className="post">
        <img src={nodejs} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>
          {/* <Link to={`/post/1}`} className="link"> */}
          <span className="post_title">Node JS</span>
          {/* </Link> */}
          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser.
        </p>
      </div>
    </>
  );
};

export default PostHome;
