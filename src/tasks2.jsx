import { useState } from "react";

export default function Tasks2() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <h3>Hello React Learner</h3>}
    </div>
  );
}
