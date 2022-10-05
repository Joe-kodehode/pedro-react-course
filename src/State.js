import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev++);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>

      {count}
    </div>
  );
}
