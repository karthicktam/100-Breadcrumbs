import React from "react";
import "./styles.css";

export default function App() {
  const arr = ["Home", "Portfolio", "Projects", "Daily UI", "Breadcrumbs"];

  return (
    <div className="breadcrumbs">
      {arr.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </div>
  );
}
