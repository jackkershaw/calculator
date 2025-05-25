function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <button onClick={() => alert("Button clicked!")} id="equals">
        =
      </button>
      <div className="grid-cols-3 grid">
        <button id="zero">0</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
      </div>
    </div>
  );
}

export default App;
