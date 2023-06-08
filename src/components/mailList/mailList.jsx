import React from "react";
import "./mailList.css";
const MailList = ({ mails }) => {
  return (
    <ul className="mailList list">
      {mails.map((mail) => (
        <li key={mail.id}>
          <div className="boxPoint"></div> <strong>Subject: </strong> -
          <a href={`/mails/id=={${mail.id}}`}>{mail.subject}</a>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
