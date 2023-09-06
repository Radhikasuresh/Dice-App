import React from "react";
import { styled } from "styled-components";

const RollDice = ({ currentDice, setCurrentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on the Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 120px;
  }

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
