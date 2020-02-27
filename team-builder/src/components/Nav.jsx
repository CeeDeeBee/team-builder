import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to="/">Members</Link>
                <Link to="/add">Add Member</Link>
            </nav>
        </header>
    );
}

export default Nav;