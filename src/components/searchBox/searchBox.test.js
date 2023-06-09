import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import SearchResults from "./searchBox";

test("renders SearchBox", () => {
  render(
    <BrowserRouter>
      <SearchResults searchTerm={"Karuna"} />
    </BrowserRouter>
  );

  expect(screen.getByText("Search Results for Karuna")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Search here...")).toBeInTheDocument();
});
