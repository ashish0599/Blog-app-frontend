import React, { useContext } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Profile from "../../image/profilePic.png";
import { Context } from "../../Context/Context";

function TopNavbar() {
  const { user, dispatch } = useContext(Context);
  console.log(user);

  const profPic = "https://blog-app-08.herokuapp.com/images/";

  //logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 
    window.location.reload("/login");
  };
  return (
    <div className="Topbar">
      <div className="topcenter">
        <h3>Blog Share</h3>

      </div>
      <div className="topright">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              ADD NEW 
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topleft">
        {user ? (
          user.profilePic ? (
            <Link to="/settings" className="link">
              <img
                className="topImg"
                src={profPic + user.profilePic}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/settings" className="link">
              <img className="topImg" src={Profile} alt="profile" />
            </Link>
          )
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                SIGN IN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopNavbar;
