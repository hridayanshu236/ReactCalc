# React Calculator

This is a simple calculator application built with React using the `useReducer` hook for state management. The app supports basic arithmetic operations and allows users to input digits, select operations, and evaluate expressions.

## Features

- **Addition, Subtraction, Multiplication, Division**: Perform basic arithmetic operations.
- **Clear Function**: Reset the calculator to its initial state.
- **Delete Function**: Remove the last digit entered.
- **Evaluate Function**: Calculate the result of the current operation.
- **Responsive Design**: The calculator adapts to different screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hridayanshu236/ReactCalc.git
2. Navigate to the project directory:
   ```bash
   cd react-calc
3. Install dependencies:
    ```bash
   npm install
4. Start the development server:
    ```bash
   npm start
6. Open your browser and visit http://localhost:3000 to see the calculator in action.

   ## Usage
- **Input Digits**: Click on the buttons to input digits.
- **Choose Operation**: Select an operation (+, -, *, ÷).
- **Evaluate**: Click = to see the result.
- **Clear**: Click AC to reset the calculator.
- **Delete**: Click DEL to remove the last entered digit.

  ## Code Structure
- **App Component**: The main component of the application, managing the calculator logic using the useReducer hook.
- **Reducer Function**: Handles the various actions such as adding digits, choosing operations, clearing the display,   deleting digits, and evaluating the result.
   
