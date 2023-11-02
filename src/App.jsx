import { useState } from "react";
import "./App.css";

import { MainMenu } from "./scenes/MainMenu";
import { BattleSelectionMenu } from "./scenes/BattleSelectionMenu";
import { LoreIntro } from "./scenes/LoreIntro";

const App = () => {
  const [currentScene, setScene] = useState("MainMenu");

  return (
    <>
      {currentScene === "MainMenu" ? <MainMenu setScene={setScene} /> : null}
      {currentScene === "LoreIntro" ? <LoreIntro setScene={setScene} /> : null}
      {currentScene === "BattleSelectionMenu" ? <BattleSelectionMenu /> : null}
    </>
  );
};

export default App;
