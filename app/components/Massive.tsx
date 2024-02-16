import React from "react";
import largeJson from "./large-file.json";

const Massive = () => {
  return (
    <div>
      {largeJson.map((item) => (
        <div key={item.id}>
          <h2>{item.id}</h2>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Massive;
