// import { useState } from "react";

// export default function Bowling() {
//   const [boll, setBoll] = useState(0);
//   const bowlingCount = () => {
//     const update = boll + 1;
//     setBoll(update);
//   };

//   return (
//     <div>
//       <h1>Bowler</h1>
//       <button onClick={bowlingCount}>Bowling</button>
//       <p>How many Balls:{boll}</p>
//       {boll > 6 && <p>Over: 1</p>}
//     </div>
//   );
// }
import { useState } from "react";

export default function Bowling() {
  const [ball, setBall] = useState(0);
  const [runs, setRuns] = useState(0);

  const bowlingCount = () => {
    if (ball < 6) {
      setBall(ball + 1);
    }
  };

  const noBall = () => {
    setRuns(runs + 1); // extra run
    // ball count বাড়বে না
  };

  return (
    <div>
      <h1>Bowler</h1>

      <button onClick={bowlingCount}>Ball</button>
      <button onClick={noBall}>No Ball</button>

      <p>Balls: {ball}</p>
      <p>Runs: {runs}</p>

      {ball === 6 && <h3>Over Complete 🎉</h3>}
    </div>
  );
}
