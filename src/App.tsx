import { useState } from "react";

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");
  const [decimalCount, setDecimalCount] = useState("0");
  const [lastEquals, setLastEquals] = useState(false);

  const clearInput = () => {
    setInput("0");
    setOutput("0");
    setLastEquals(false);
  };

  const addNumber = (number: string) => {
    if (lastEquals) {
      return;
    } else if (input === "0") {
      setInput(number);
    } else {
      setInput(input + number);
    }
  };

  // will need to rewrite this for multiple decimal numbers // User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

  const addDecimal = () => {
    if (lastEquals) {
      return;
    } else if (decimalCount == "0") {
      setInput(input + ".");
      setDecimalCount("1");
    } else {
      return;
    }
  };

  const addZero = () => {
    if (lastEquals) {
      return;
    } else if (input === "0") {
      return;
    } else {
      addNumber("0");
    }
  };

  const addOperator = (operator: string) => {
    if (lastEquals) {
      setInput(input + operator);
      setDecimalCount("0");
      setLastEquals(false);
    } else if (input.endsWith(operator)) {
      return;
    } else {
      setInput(input + operator);
      setDecimalCount("0");
    }
  };

  const calc = () => {
    const total = eval(input);
    setInput(total);
    setOutput(total);
    setDecimalCount("0");
    setLastEquals(true);
  };

  return (
    <div className="p-3 bg-neutral-200 min-h-screen">
      <h1 className="text-8xl font-bold">Calculator</h1>
      <div>
        <span className="bg-neutral-900 text-white text-4xl font-bold p-10 my-5 rounded-lg w-full h-30 block flex flex-col justify-center text-right">
          <span id="display" className="text-gray-300">
            {input}
          </span>
          <span id="output">{output}</span>
        </span>
      </div>
      <div className="grid-cols-3 grid gap-5">
        <button
          id="zero"
          onClick={addZero}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          0
        </button>
        <button
          id="one"
          onClick={() => addNumber("1")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          1
        </button>
        <button
          id="two"
          onClick={() => addNumber("2")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          2
        </button>
        <button
          id="three"
          onClick={() => addNumber("3")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          3
        </button>
        <button
          id="four"
          onClick={() => addNumber("4")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          4
        </button>
        <button
          id="five"
          onClick={() => addNumber("5")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          5
        </button>
        <button
          onClick={() => addNumber("6")}
          id="six"
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          6
        </button>
        <button
          onClick={() => addNumber("7")}
          id="seven"
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          7
        </button>
        <button
          id="eight"
          onClick={() => addNumber("8")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          8
        </button>
        <button
          id="nine"
          onClick={() => addNumber("9")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          9
        </button>
        <button
          id="decimal"
          onClick={addDecimal}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          .
        </button>
        <button
          id="equals"
          onClick={calc}
          className="bg-red-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          =
        </button>
        <button
          id="add"
          onClick={() => addOperator("+")}
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          +
        </button>
        <button
          id="subtract"
          onClick={() => addOperator("-")}
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          -
        </button>
        <button
          id="multiply"
          onClick={() => addOperator("*")}
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          x
        </button>
        <button
          id="divide"
          onClick={() => addOperator("/")}
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          ÷
        </button>
        <button
          id="clear"
          className="bg-black text-white text-4xl font-bold p-3 rounded-lg hover:bg-neutral-900"
          onClick={clearInput}
        >
          C
        </button>
      </div>
    </div>
  );
}
export default App;
