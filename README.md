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

TDD is a concept and a method for writing tests and code.
With a TDD approach, you first write tests that describe your use case (function, component, whatever). These tests will now fail. Then you write code to make the tests pass. There are many proclaimed advantages to TDD, but basically it's supposed to help you develop more sustainable and reliable applications.

**_Ok, so what is React Testing Library again?_**

React testing library is a npm package that helps you test react components. It lets you render react components in a test environment and provides many helper functions to interact with elements and to _assert_ on the output.

Generally tests for javascript apps are run in a node environment, and Jest is another library that takes care of that. React testing library functions together with Jest.

**Jest** is a very popular testing library for javascript, **React testing library** is a helper package for react components.

## Setup

Start the project using `npm install && npm run dev` and check it out in your browser.
Start the test running using `npm run test` in another terminal.

I advice you to setup your editor so you have two terminals open inside the editor. One for running `npm run dev` and one for running your `npm run test`. This gives you quick feedback without having to navigate back and forth between applications to see what's going on.

## Assignments

This app is a todo app and your job is to write tests for this app.

1. Test the Todo component

This component takes two props, `text` and `removeTodo`
and renders the todo text and a button to remove it.
You can test that the text renders and that the button calls `removeTodo` on click.

2. Test the AddTodo component

`AddTodo` keeps its own text state.
You can test that the input updates on change and that the `addTodo` is called with the right arguments.

3. Test the App component

The App uses both the todolist and the addtodo.
Test if adding a todo adds one item to the list of todos.

## Extra: go full TDD!!!

Think about more functionality for the todo app and describe them in tests. Then you create components and code to make the tests pass.

Maybe get remote data from som api and display a random image as congratulations for the user whenever they add a new todo?
