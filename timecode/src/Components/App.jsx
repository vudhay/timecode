import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(time);
  function currenttime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  return (
    <div>
      <h1>{Time}</h1>
      <button onClick={currenttime}>getTime</button>
    </div>
  );
}

export default App;
