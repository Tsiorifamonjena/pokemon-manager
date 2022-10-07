Feature: List of all pokemon on home page

    home page show list of all pokemon available. A skeleton is shown until fetch data

    Scenario: Fetching data
      Given User arrives for the first time on the home page
      When system fetch data
      Then Skeleton is show

    Scenario: Pokemon list is shown successfully
      Given Fetch is ended
      When API find 2 pokemons
      Then 2 cards items are shown