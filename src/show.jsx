import { useState } from "react";

export default function Show() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div>
      <h3>Show</h3>
      <button onClick={handleToggle}>{show ? "Hide" : "Show"}</button>
      {show && <h3>Hello React Learner</h3>}
    </div>
  );
}
