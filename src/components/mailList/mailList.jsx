import React from "react";
// import { Link } from "react-router-dom";
import "./mailList.css";
const MailList = ({ mails }) => {
  return (
    <ul className="mailList list">
      {mails.map((mail) => (
        <li key={mail.id}>
          <div className="boxPoint"></div> <strong>Subject: </strong> -
          <a to={`/mails/${mail.id}`}>{mail.subject}</a>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
