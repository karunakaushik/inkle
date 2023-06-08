import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const MailDetails = () => {
  // Using Redux
  const { id } = useParams();
  const mails = useSelector((state) => state.mails);
  const mail = mails.find((mail) => mail.id == id);

  return (
    <div>
      {mail ? (
        <>
          <h2>Subject : {mail.subject}</h2>
          <p>Body : {mail.body}</p>
        </>
      ) : (
        <p>Mail not loaded...</p>
      )}
    </div>
  );
};

export default MailDetails;
