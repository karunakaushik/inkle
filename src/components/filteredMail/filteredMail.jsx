import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MailList from "../mailList/mailList";
import { fetchMails } from "../../Reduxstore/action/actions";

const FilteredMailList = () => {
  const { tag } = useParams();
  const dispatch = useDispatch();
  const mails = useSelector((state) =>
    state.mails.filter((mail) => mail.tag == tag)
  );
  useEffect(() => {
    dispatch(fetchMails());
  }, [dispatch]);

  return (
    <div>
      <h1>{tag.charAt(0).toUpperCase() + tag.slice(1)} Mail</h1>
      <MailList mails={mails} />
    </div>
  );
};

export default FilteredMailList;
