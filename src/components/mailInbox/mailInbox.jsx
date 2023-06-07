import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMailsFailure,
  fetchMailsSuccess,
} from "../../Reduxstore/action/actions";
import MailList from "../mailList/mailList";
import SearchResults from "../searchBox/searchBox";

const MailInbox = () => {
  //using Redux
  const [search, setSearch] = useState("");
  const mails = useSelector((state) => state.mails);
  const [filtered, setFiltered] = useState(mails);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    setFiltered(mails);
  }, [mails]);

  const handelSearch = (e) => {
    setSearch(e.target.value);

    const update = mails.filter((mail) =>
      mail.subject?.toLowerCase().includes(e.target.value?.toLowerCase())
    );
    setFiltered(update);
  };
  return (
    <div>
      <SearchResults searchTerm={search} onSearchChange={handelSearch} />
      <h1> All Mails</h1>
      {!error ? <MailList mails={filtered} /> : <p>Error: {error}</p>}
    </div>
  );
};

export default MailInbox;
