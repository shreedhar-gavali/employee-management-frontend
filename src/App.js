import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Employee Form</h1>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Entered Name: {name}</p>
    </div>
  );
}

export default App;

