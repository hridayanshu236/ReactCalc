import { useReducer, useState } from "react";
import "./style.css"

function reducer(state, action) {
  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };
    case "CHOOSE_OPERATION":
      return {
        ...state,
        operation: action.payload,
        previousOperand: state.currentOperand,
        currentOperand: "",
      };
      case "CLEAR":
      return {
        currentOperand: "",
        previousOperand: "",
        operation: "",
      };

    case "DELETE_DIGIT":
      return{
        ...state,
        currentOperand: state.currentOperand.slice(0,-1),
      };

      case "EVALUATE":
        return{
          ...state,
          currentOperand: eval(
            `${state.previousOperand}${state.operation}${state.currentOperand}`
          ).toString(),
          previousOperand: '',
          operation: "",
        };
        default:
          return state;
  }
}
function App() {
  const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {
    currentOperand: "",
    previousOperand: "",
    operation: "",
  })

  const handleOperandSelect = (digit) => {
    dispatch({type: "ADD_DIGIT", payload: digit});
  }
  const handleOperationSelect = (operation) => {
    dispatch({ type: "CHOOSE_OPERATION", payload: operation });
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_DIGIT" });
  };

  const handleEvaluate = () => {
    dispatch({ type: "EVALUATE" });
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button onClick={handleClear} className="span-two">AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={(e) => handleOperationSelect(e.currentTarget.textContent)}>÷</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>1</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>2</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>3</button>
      <button onClick={(e) => handleOperationSelect(e.currentTarget.textContent)}>*</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>4</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>5</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>6</button>
      <button onClick={(e) => handleOperationSelect(e.currentTarget.textContent)}>+</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>7</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>8</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>9</button>
      <button onClick={(e) => handleOperationSelect(e.currentTarget.textContent)}>-</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>.</button>
      <button onClick={(e) => handleOperandSelect(e.currentTarget.textContent)}>0</button>
      <button className="span-two" onClick={handleEvaluate}>=</button>

    </div>
  )

}

export default App;
