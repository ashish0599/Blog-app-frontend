import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cates, setCates] = useState([]);
  //get Category
  const getCategory = async () => {
    const res = await axios.get(
      "https://blog-app-08.herokuapp.com/api/categories"
    );
    // console.log(res.data.details);
    setCates(res.data.postCategory);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <p className="about_me">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">KEY SKILLS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">JAVASCRIPT</li>
          <li className="sidebarListItem">REACT JS</li>
          <li className="sidebarListItem">NODE JS</li>
          <li className="sidebarListItem">EXPRESS</li>
        </ul>

        
        <ul className="sidebarList">
          {cates.map((cate) => (
            <Link key={cate._id} className="link" to={`/?cat=${cate.name}`}>
              <li className="sidebarListItem">{cate.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">Follow Me</span>
        <div className="sidebarSocial">
          <GitHub />
          <Mail className="mail" />
          <Facebook className="facebook" />
           <WhatsApp className="whatsapp" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
