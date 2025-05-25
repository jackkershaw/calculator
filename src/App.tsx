import { useState } from "react";

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");

  const clearInput = () => {
    setInput("");
    setOutput("0");
  };

  return (
    <div className="p-3 bg-neutral-200 min-h-screen">
      <h1 className="text-8xl font-bold">Calculator</h1>
      <div>
        <span
          id="display"
          className="bg-neutral-900 text-white text-4xl font-bold p-10 my-5 rounded-lg w-full h-30 block flex flex-col justify-center text-right"
        >
          <span id="input" className="text-gray-300">
            {input}
          </span>
          <span id="output">{output}</span>
        </span>
      </div>
      <div className="grid-cols-3 grid gap-5">
        <button
          id="zero"
          onClick={() => setInput(input + "0")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          0
        </button>
        <button
          id="one"
          onClick={() => setInput(input + "1")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          1
        </button>
        <button
          id="two"
          onClick={() => setInput(input + "2")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          2
        </button>
        <button
          id="three"
          onClick={() => setInput(input + "3")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          3
        </button>
        <button
          id="four"
          onClick={() => setInput(input + "4")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          4
        </button>
        <button
          id="five"
          onClick={() => setInput(input + "5")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          5
        </button>
        <button
          onClick={() => setInput(input + "6")}
          id="six"
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          6
        </button>
        <button
          onClick={() => setInput(input + "7")}
          id="seven"
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          7
        </button>
        <button
          id="eight"
          onClick={() => setInput(input + "8")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          8
        </button>
        <button
          id="nine"
          onClick={() => setInput(input + "9")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          9
        </button>
        <button
          id="decimal"
          onClick={() => setInput(input + ".")}
          className="bg-blue-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          .
        </button>
        <button
          id="equals"
          className="bg-red-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          =
        </button>
        <button
          id="add"
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          +
        </button>
        <button
          id="subtract"
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          -
        </button>
        <button
          id="multiply"
          className="bg-gray-500 text-white text-4xl font-bold p-3 rounded-lg"
        >
          x
        </button>
        <button
          id="divide"
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
