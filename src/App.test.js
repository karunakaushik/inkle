import { render, screen } from "@testing-library/react";
import App from "./App";
import { mailReducer } from "./Reduxstore/reducer/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(mailReducer, applyMiddleware(thunk));

test("renders the app", () => {
  jest.mock("./Reduxstore/action/actions", () => ({
    fetchMails: jest.fn(),
  }));
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
