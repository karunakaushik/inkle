import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul className="list gap">
        <li>
          <Link to="/filter/inbox">
            <button className="btn btn-primary">Inbox</button>
          </Link>
        </li>
        <li>
          <Link to="/filter/draft">
            <button className="btn btn-primary">Draft</button>
          </Link>
        </li>
        <li>
          <Link to="/filter/spam">
            <button className="btn btn-primary">Spam</button>
          </Link>
        </li>
        <li>
          <Link to="/filter/trash">
            <button className="btn btn-primary">Trash</button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="btn btn-primary">All</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
