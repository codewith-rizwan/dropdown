import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h3>Select your City</h3>
      <select className="sel-op" onChange={(e) => setData(e.target.value)}>
        <option value="0">Select</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Dehli">Dehli</option>
        <option value="Pune">Pune</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      <div>
        <p>
          <span>City: </span>
          {data}
        </p>
      </div>
    </div>
  );
}
