import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MailInbox from "./components/mailInbox/mailInbox";
import MailBody from "./components/mailBody/mailBody";
import SearchResults from "./components/searchBox/searchBox";
import FilteredMailList from "./components/filteredMail/filteredMail";
import NavBar from "./components/navBar/navBar";
import { useDispatch } from "react-redux";
import { fetchMails } from "./Reduxstore/action/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMails());
  }, []);

  return (
    <BrowserRouter>
      <div className="contain d-flex ">
        <NavBar />
        <Switch>
          <Route path="/filter/:tag" component={FilteredMailList} />
          <Route path="/mails/:id" component={MailBody} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/inkle" component={MailInbox} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
