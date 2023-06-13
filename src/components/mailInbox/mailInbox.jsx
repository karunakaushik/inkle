import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MailList from "../mailList/mailList";
import SearchTerms from "../searchBox/searchBox";
import "./mailInbox.css";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const MailInbox = () => {
  const history = useHistory();
  //using Redux
  const keyVar = history?.location?.search?.split("=")[1];
  const [searchTerm, setSearchTerm] = useState(keyVar);
  const mails = useSelector((state) => state.mails);
  const [filtered, setFiltered] = useState(mails);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    let newList = mails;
    if (searchTerm !== undefined && searchTerm?.trim() !== "") {
      newList = mails.filter((mail) =>
        mail.subject?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
    }
    setFiltered(newList);
  }, [mails]);

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const update = mails.filter((mail) =>
      mail.subject?.toLowerCase().includes(e.target.value?.toLowerCase())
    );
    setFiltered(update);
    history.push(`/inkle?search=${e.target.value}`);
  };

  return (
    <div className="mainBox">
      <SearchTerms searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <h1> All Mails</h1>
      {!error ? <MailList mails={filtered} /> : <p>Error: {error}</p>}
    </div>
  );
};
export default MailInbox;
