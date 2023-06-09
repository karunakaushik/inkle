import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul className=" d-flex list gap">
        <li>
          <Link to="/inkle">
            <button className="btn btn-primary">All</button>
          </Link>
        </li>
        <li>
          <Link to="/inkle/filter/inbox">
            <button className="btn btn-primary">Inbox</button>
          </Link>
        </li>
        <li>
          <Link to="/inkle/filter/draft">
            <button className="btn btn-primary">Draft</button>
          </Link>
        </li>
        <li>
          <Link to="/inkle/filter/spam">
            <button className="btn btn-primary">Spam</button>
          </Link>
        </li>
        <li>
          <Link to="/inkle/filter/trash">
            <button className="btn btn-primary">Trash</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
