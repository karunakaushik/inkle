import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MailInbox from "./mailInbox";
import { mailReducer } from "../../Reduxstore/reducer/reducer";

const store = createStore(mailReducer);

test("renders mail inbox", () => {
  render(
    <Provider store={store}>
      <MailInbox />
    </Provider>
  );

  expect(screen.getByText("All Mails")).toBeInTheDocument();
  expect(screen.getByText("Search :")).toBeInTheDocument();
});
