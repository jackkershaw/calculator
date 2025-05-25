function App() {
  return (
    <div className="p-10 bg-neutral-200 h-screen">
      <h1 className="text-8xl font-bold">Calculator</h1>

      <div className="grid-cols-3 grid gap-5">
        <button
          id="zero"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          0
        </button>
        <button
          id="one"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          1
        </button>
        <button
          id="two"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          2
        </button>
        <button
          id="three"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          3
        </button>
        <button
          id="four"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          4
        </button>
        <button
          id="five"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          5
        </button>
        <button
          id="six"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          6
        </button>
        <button
          id="seven"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          7
        </button>
        <button
          id="eight"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          8
        </button>
        <button
          id="nine"
          className="bg-blue-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          9
        </button>
        <button
          onClick={() => alert("Button clicked!")}
          id="equals"
          className="bg-red-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          =
        </button>
        <button
          id="add"
          className="bg-gray-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          +
        </button>
        <button
          id="subtract"
          className="bg-gray-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          -
        </button>
        <button
          id="multiply"
          className="bg-gray-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          x
        </button>
        <button
          id="divide"
          className="bg-gray-500 text-white text-4xl font-bold p-10 rounded-lg"
        >
          ÷
        </button>
      </div>
    </div>
  );
}

export default App;
