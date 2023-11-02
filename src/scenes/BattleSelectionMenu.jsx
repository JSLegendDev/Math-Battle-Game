import { useState } from "react";
import { foes } from "../constants";

export const BattleSelectionMenu = () => {
  const [selectedFoeId, setFoeId] = useState(null);

  return (
    <>
      <section>
        <h1>Select your opponent!</h1>
        {foes.map((foe) => (
          <button
            key={foe.id}
            onClick={() => setFoeId(foe.id)}
            disabled={selectedFoeId !== foe.id}
          >
            {foe.name}
          </button>
        ))}
      </section>
      <section>Foe Vanquished : 0/4</section>
      <section>
        <button>Start Combat!</button>
      </section>
    </>
  );
};
