import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const handleSingle = () => {
    const UpdatedRuns = runs + 1;
    setRuns(UpdatedRuns);
  };

  const handleSix = () => {
    const UpdatedRuns = runs + 6;
    setRuns(UpdatedRuns);
  };
  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };

  return (
    <div>
      <h3>Player: BD Batsmans</h3>
      {runs > 50 && <p>You Score:50</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>singels</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
