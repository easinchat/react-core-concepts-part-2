import { useState } from "react";

export default function Tasks() {
  const [runs, setRuns] = useState(0);

  const addHandler = () => {
    const addRuns = runs + 1;
    setRuns(addRuns);
  };
  const minHandler = () => {
    const addRuns = runs - 1;
    setRuns(addRuns);
  };

  return (
    <div>
      <h2>Runs:{runs}</h2>
      <button onClick={addHandler}>Add Runs:</button>
      <button onClick={minHandler}> Penalty Runs:</button>
    </div>
  );
}
