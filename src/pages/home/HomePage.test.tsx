import { render, RenderResult, screen } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../app/store";
import HomePage from "./HomePage";

const feature = loadFeature("__test__/features/listPokemon.feature");

defineFeature(feature, (test) => {
  const HomePageMock = () => (
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  );

  //#1 scenario
  test("Fetching data", ({ given, when, then }) => {
    let HomePageRendered: RenderResult;

    given("User arrives for the first time on the home page", () => {
      HomePageRendered = render(<HomePageMock />);
    });

    when("system fetch data", () => {
      jest.mock("../../app/services/hooks/useSearchPokemon", () => {
        return jest.fn(() => ({
          isFetching: true,
        }));
      });
    });

    then("Skeleton is show", () => {
      const { container } = HomePageRendered;
      expect(
        container.getElementsByClassName("MuiSkeleton-root").length
      ).toBeGreaterThan(0);
    });
  });

  //#2 scenario
  test("Pokemon list is shown successfully", ({ given, when, then }) => {
    given("Fetch is ended", () => {
      //render(<HomePage />);
    });

    when("API find 2 pokemons", () => {
      //   jest.mock("", () => {
      //     return jest.fn(() => ({
      //       isFetching: true,
      //     }));
      //   });
    });

    then("2 cards items are shown", () => {
      //expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument();
    });
  });
});
