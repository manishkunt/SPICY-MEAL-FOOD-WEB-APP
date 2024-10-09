import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "../../utils/DarkModeContext";
import "@testing-library/jest-dom";

it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <DarkModeProvider>
          <Header />
        </DarkModeProvider>
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Login");

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <DarkModeProvider>
          <Header />
        </DarkModeProvider>
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByText("Login");

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "LogOut" });
  expect(logoutButton).toBeInTheDocument();
});
