import PropTypes from "prop-types";

export const LoreIntro = ({ setScene }) => {
  return (
    <>
      <p>
        The people of Mathelia were oppressed by 4 tyrants using the power of
        math to rein over the people. This oppression went on for years, until a
        great hero arose. Able to do math, he sets out to defeat and liberate
        the people from these 4 tyrants.
      </p>

      <button onClick={() => setScene("BattleSelectionMenu")}>
        Continue...
      </button>
    </>
  );
};

LoreIntro.propTypes = {
  setScene: PropTypes.func,
};
