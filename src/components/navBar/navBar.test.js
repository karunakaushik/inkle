import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./navBar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

test("renders NavBar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.getByText("All")).toBeInTheDocument();
  expect(screen.getByText("Inbox")).toBeInTheDocument();
  expect(screen.getByText("Spam")).toBeInTheDocument();
  expect(screen.getByText("Draft")).toBeInTheDocument();
  expect(screen.getByText("Trash")).toBeInTheDocument();
});
