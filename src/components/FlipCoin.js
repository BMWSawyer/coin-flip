import React, { useState } from "react";
import Coin from "./Coin";
import coinHeads from '../canadian-loonie-heads.png';
import coinTails from '../canadian-loonie-tails.png';

export default function FlipCoin() {
  const coins = [
    {
      side: "head",
      imgSrc: coinHeads,
    },
    {
      side: "tail",
      imgSrc: coinTails,
    },
  ];

  const [currentFace, setCurrentFace] = useState(coins[0]);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);

  // Function takes array of different faces of a coin
  //  and return a random chosen single face
  function choice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Function responsible to update the states
  // according to users interactions

  const newFace = choice(coins);

  function handleClick() {
    const headsCount = heads + (newFace.side === "head" ? 1 : 0);
    setCurrentFace(newFace);
    setTotalFlips((prev) => prev + 1);
    setHeads(headsCount);
  }

  return (
    <div>
      <h2>Let's flip a coin</h2>

      {/* If current face exist then show current face */}
      {currentFace && <Coin imgInfo={currentFace.imgSrc} />}

      {/* Button to flip the coin  */}
      <button onClick={() => handleClick()}>Flip Me!</button>
      <p>
        Out of {totalFlips} flips, there have been {heads} heads and{" "}
        {totalFlips - heads} tails
      </p>
    </div>
  );
}
