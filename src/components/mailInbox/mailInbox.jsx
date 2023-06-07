import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMails } from "../../Reduxstore/action/actions";
import MailList from "../mailList/mailList";
import "./mailInbox.css";
import SearchResults from "../searchBox/searchBox";

const MailInbox = () => {
  //using Redux
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const mails = useSelector((state) => state.mails);
  const [filtered, setFiltered] = useState(mails);

  useEffect(() => {
    dispatch(fetchMails());
    filteredMails();
  }, [dispatch, search]);

  const filteredMails = () => {
    const update = mails.filter(
      (mail) =>
        // mail.tag?.toLowerCase().includes(search?.toLowerCase()) ||
        mail.subject?.toLowerCase().includes(search?.toLowerCase())
      // mail.body?.toLowerCase().includes(search?.toLowerCase())
    );
    setFiltered(update);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <SearchResults searchTerm={search} onSearchChange={handelSearch} />
      <h1> All Mails</h1>
      <MailList mails={filtered} />
    </div>
  );
};

export default MailInbox;
