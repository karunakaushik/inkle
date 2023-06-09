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
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="contain d-flex ">
        <NavBar />
        <Switch>
          <Route path="/inkle/filter/:tag" component={FilteredMailList} />
          <Route path="/inkle/mails/id={:id}" component={MailBody} />
          <Route path="/inkle/search/:keyword" component={SearchResults} />
          <Route exact path="/inkle" component={MailInbox} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
