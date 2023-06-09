import React from "react";
import { render, screen } from "@testing-library/react";
import MailList from "./mailList";
import { BrowserRouter } from "react-router-dom";

const mails = [
  { id: "1", sender: "John Doe", subject: "Hello", body: "Test mail" },
  {
    id: "2",
    sender: "Jane Smith",
    subject: "Greetings",
    body: "Another test mail",
  },
];

test("renders mail list", () => {
  render(
    <BrowserRouter>
      <MailList mails={mails} />
    </BrowserRouter>
  );

  expect(screen.getByText("Hello")).toBeInTheDocument();
  expect(screen.getByText("Greetings")).toBeInTheDocument();
});
