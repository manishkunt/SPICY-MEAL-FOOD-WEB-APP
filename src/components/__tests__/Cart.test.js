import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../__mocks__/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "../../utils/DarkModeContext";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restaurnat menu component", async () => {
  await act(async () =>
    render(
      <DarkModeProvider>
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      </DarkModeProvider>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addButtons = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("2")).toBeInTheDocument();

  fireEvent.click(addButtons[5]);

  expect(screen.getByText("3")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Your cart looks empty.")).toBeInTheDocument();
});
