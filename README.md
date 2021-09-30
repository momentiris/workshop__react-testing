<img src="https://media.giphy.com/media/3o6Mbbs879ozZ9Yic0/giphy.gif?cid=ecf05e47p08s27t9sxqplnn6rdq2hcvbtws1u1dkzwqljwvu&rid=giphy.gif&ct=g" width="100%">

# 10 - React Testing

Today we're going to learn how to write tests in React.

- :link: Links

  - [@testing-library](https://testing-library.com/docs/react-testing-library/intro/)

  - [examples](https://testing-library.com/docs/example-codesandbox)

## About

__Disclaimer:__
_There are a lot of opinions on testing, what is what and how it should be done. I'm no expert and can only share from my own experience with testing._

___Why write tests at all?___
We write tests to ensure our code does what it's supposed to do. Generally, having code covered by tests gives you and your team more confidence in your applications performance over time.

___How do you write tests?___
From convention, there are three types of tests:
- Unit tests
- Integration tests
- End to end (e2e) tests

Unit tests are used for testing a single pure function. With pure I mean a function that doesn't have any side effects and will always return the same output, given the same input. If you have some complex calculation or logic in a function, you test it with a unit test.

Integration tests are for testing the integration of several parts of your application. Maybe you want to test a function that fetches som remote data, and then saves it to a file. It's common to mock (use fake data and fake function returns) to do this. You want to test a flow, not make actual database or http calls.

E2E tests are for testing your whole application, end to end. These are often done in a test environment with a real database and real http calls.

___So how do you test React code?___
I think React code often finds itself a bit hard to put in one of these categories, and is often somewhere between Unit and Integration tests. They are component tests, and components are sometimes pure and only render stuff without any external dependencies. And sometimes they fetch some remote data, and then renders that data in some particular way, as a list of todos, for example.
## Assignments

This workshop contains a tic tac toe game. The main code for the game lives in `src/main.ts`. It's all in one file and I've done some work on making it difficult to understand. Using the guidelines listed above, You should try to clean the code into something that is easier to understand.

## Extra

If this is too easy or you have a lot of time after you've done, I suggest you try to to clean some other code in one of your projects.
