import { useState } from "react";
const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Name:Rama</h2>
      <h3>Location: Chennai</h3>
      <h4>ramaraghunathan18</h4>
      <button
        onClick={() => {
          (num) => setCount(num++);
        }}
      >
        Count ={count}
      </button>
    </div>
  );
};

export default User;
