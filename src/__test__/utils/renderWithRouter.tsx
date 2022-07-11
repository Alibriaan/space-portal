import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: JSX.Element, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent,
    ...render(ui, {wrapper: BrowserRouter}),
  }
};

export default renderWithRouter;
