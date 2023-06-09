import React from "react";
import "./mailList.css";
import { Link } from "react-router-dom";

const MailList = ({ mails }) => {
  return (
    <ul className="mailList list">
      {mails.map((mail) => (
        <li key={mail.id}>
          <div className="boxPoint"></div> <strong>Subject: </strong> -
          <Link to={`/inkle/mails/id={${mail.id}}`}>{mail.subject}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
