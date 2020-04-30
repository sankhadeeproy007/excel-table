# React Code Style Guide

React projects' best practices to follow.

# Introduction

This is meant to be a guide to help new developers understand
the React code style and best practices to adopt.

# Table of contents

- [Component definition](#component-definition)
- [Project organization](#project-organization)
  - [Components](#components)
  - [Screens](#screens)
- [Code Standards](#code-standards)
  - [Destructure props](#destructure-your-props)
  - [Screens](#screens)

# Component definition

All components (components or screens) should **always** be
defined as a directory, named with pascal casing. The main component file
should be `index.js` and stylesheet `style.css`.

```
AwesomeTable/
├── index.js
└── style.css
```

- Styles should always be defined in a separate CSS file

[:arrow_up: Back to top][table-of-contents]

# Project organization

Project components should be separated in at least three directories:

```
awesome-react-project/
└── src/
   ├── components/
   └── screens/
```

Each of these directories have special types of components:

### `components/`

Reusable components. Ideally shouldn't store state. Stuff like buttons, inputs,
labels, tables and all presentational components goes here. These components can also accept functions as props and dispatch events.

### `screens/`

Screen components can store state, receive route parameters and dispatch
Redux actions when applicable. They represent the application routes and most times are displayed by a router. Screens are also responsible for handling container components callbacks and flowing data into children containers.

[:arrow_up: Back to top][table-of-contents]

# Code standards

## Destructure your `props`

### props should be destructed while defining the Component

```js
const MyButton = ({ prop1, prop2, ...props }) => {
  // Do required operations based on prop1 and prop2
  return <button {...props} />;
};
```

## Code style

### Line length should not exceed 80 characters.

### Use explanatory variables

Bad

```js
const onlyNumbersRegex = /^\d+$/;
const validateNumber = (message) => (value) =>
  !onlyNumbersRegex.test(value) && message;

validateNumber('error message')(1);
```

Good

```js
const onlyNumbersRegex = /^\d+$/;
const getNumberValidation = (message) => (value) =>
  !onlyNumbersRegex.test(value) && message;

const isNumber = getNumberValidation('error message');

isNumber(1);
```

### Use searchable names

Bad

```js
setTimeout(doSomething, 86400000);
```

Good

```js
const DAY_IN_MILLISECONDS = 86400000;

setTimeout(doSomething, DAY_IN_MILLISECONDS);
```

## Naming

### Screen and components folders names must start with capital letter.
