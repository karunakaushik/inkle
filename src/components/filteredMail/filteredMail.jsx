import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MailList from "../mailList/mailList";

const FilteredMailList = () => {
  const { tag } = useParams();
  const mails = useSelector((state) =>
    state.mails.filter((mail) => mail.tag === tag)
  );
  return (
    <div>
      <h1>{tag.charAt(0).toUpperCase() + tag.slice(1)} Mail</h1>
      <MailList mails={mails} />
    </div>
  );
};

export default FilteredMailList;
