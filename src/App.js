import "./App.css";
// Import state hook
import { useState } from "react";

// This component will be responsible for rendering a number for showing current number and 2
// buttons for incrementing and decrementing the number.
function App() {
  // Create a state using state hook called number
  const [number, setNumber] = useState(0);

  // Create event handler function for onClick events
  // of 2 buttons 
  

  return <div className="App">
    {/*Create a h1 elem and 2 button elements inside a main element */}
    <main>
      {/* Show the current number in h1 element */}
      <h1>{number}</h1>
      <button class="increment">+</button>
      <button class="decrement">-</button>
    </main>
  </div>;
}

export default App;
