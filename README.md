<img src="https://media.giphy.com/media/3o6Mbbs879ozZ9Yic0/giphy.gif?cid=ecf05e47p08s27t9sxqplnn6rdq2hcvbtws1u1dkzwqljwvu&rid=giphy.gif&ct=g" width="100%">

# 10 - React Testing

Today we're going to learn how to write tests in React.

- :link: Links

  - [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

  - [examples](https://testing-library.com/docs/example-codesandbox)

  - [Test Driven Development (TDD)](https://marsner.com/blog/why-test-driven-development-tdd/)

## About

**Disclaimer:**
_There are a lot of opinions on testing, what is what and how it should be done. I'm no expert and can only share from my own experience with testing._

**_Why write tests at all?_**
We write tests to ensure our code does what it's supposed to do. Generally, having code covered by tests gives you and your team more confidence in your applications performance over time.

**_How do you write tests?_**
From convention, there are three types of tests:

- Unit tests
- Integration tests
- End to end (e2e) tests

Unit tests are used for testing a single pure function. With pure I mean a function that doesn't have any side effects and will always return the same output, given the same input. If you have some complex calculation or logic in a function, you test it with a unit test.

Integration tests are for testing the integration of several parts of your application. Maybe you want to test a function that fetches som remote data, and then saves it to a file. It's common to mock (use fake data and fake function returns) to do this. You want to test a flow, not make actual database or http calls.

E2E tests are for testing your whole application, end to end. These are often done in a test environment with a real database and real http calls.

**_So how do you test React code?_**
I think React code often finds itself a bit hard to put in one of these categories, and is often somewhere between Unit and Integration tests. They are component tests, and components are sometimes pure and only render stuff without any external dependencies. And sometimes they fetch some remote data, and then renders that data in some particular way, as a list of todos for example.

**_What is Test driven development?_**
TDD is a concept and a method in regards to writing code and tests.
With a TDD approach, you first write tests that describe your use case (function, component, whatever). These tests will now fail. Then you write code to make the tests pass. There are many proclaimed advantages to TDD, but basically it's supposed to help you develop more sustainable and reliable applications.

## Assignments

This app is a todo app! Start the project using `npm install && npm run dev` and check it out in your browser.

Your job is to write tests for this app.

CONTINUE WRITING HERE
