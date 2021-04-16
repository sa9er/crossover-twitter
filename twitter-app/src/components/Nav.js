import React from 'react';
import {Switch, Route, NavLink, HashRouter as Router} from "react-router-dom";

//importing css
import './Nav.css';
//importing icons
//import { FiTwitter} from "react-icons/fi"
import { IoHomeOutline} from "react-icons/io5"
import { FaHashtag } from "react-icons/fa"
import { BsBell } from "react-icons/bs"
import { MdLocalPostOffice } from "react-icons/md"
import { BsBookmarks } from "react-icons/bs"
import { BsCardList } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"

const Nav = () => (
<div className="nav-body">
    <nav>
        {/* <li>
            <a><img src="../twitter.png" width="40" alt="twitter icon"/></a>
        </li> */}
        <li>
            <IoHomeOutline /><a href="/">Home</a>
        </li>
        <li>
            <FaHashtag /><a>Explore</a>
        </li>
        <li>
            <BsBell /><a>Notifications</a>
        </li>
        <li>
            <MdLocalPostOffice /><a>Messages</a>
        </li>
        <li>
            <BsBookmarks /><a>Bookmarks</a>
        </li>
        <li>
            <BsCardList /><a>Lists</a>
        </li>
        <li>
            <BsPerson /><a>Profile</a>
        </li>
        <li>
            <CgMoreO /><a>More</a>
        </li>
        
        <div className="Tweet">
            <li>
                <a>Tweet</a>
            </li>
        </div>
    </nav>
</div>
);

export default Nav; 



//<img src="/src/twitter.png" alt="Twitter Flattervogel" ></img>