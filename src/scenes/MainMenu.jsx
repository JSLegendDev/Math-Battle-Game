import PropTypes from "prop-types";

export const MainMenu = ({ setScene }) => {
  return (
    <>
      <h1>Math Battle Game</h1>
      <section>
        <button onClick={() => setScene("BattleSelectionMenu")}>
          Start Game
        </button>
      </section>
    </>
  );
};

MainMenu.propTypes = {
  setScene: PropTypes.string,
};
