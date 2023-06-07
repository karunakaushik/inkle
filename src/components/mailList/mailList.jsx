import React from "react";
import { Link } from "react-router-dom";
import "./mailList.css";
const MailList = ({ mails }) => {
  return (
    <ul className="mailList list">
      {mails.map((mail) => (
        <li key={mail.id}>
          <div className="boxPoint"></div> <strong>Subject: </strong> -
          <Link to={`/mails/${mail.id}`}>{mail.subject}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
