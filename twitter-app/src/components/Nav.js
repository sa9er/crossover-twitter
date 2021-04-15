import React from 'react';

//importing css
import './Nav.css';
//importing icons
import { FiTwitter} from "react-icons/fi"
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
        <li>
        <img src="/components/twitter.png" alt="Twitter Flattervogel" ></img>
        </li>
        <li>
            <IoHomeOutline /><a>Home</a>
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
        <li>
            <a>Tweet</a>
        </li>
    </nav>
</div>
);

export default Nav; 
