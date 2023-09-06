import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));

    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any Number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    console.log(randomNumber);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainCointainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        roleDice={roleDice}
      />
      <div className="buttons">
        <OutlineButton onClick={resetScore}>Reset-Score</OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show-Rules"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainCointainer>
  );
};

export default GamePlay;

const MainCointainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;
const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s;
  }
`;
const OutlineButton = styled(Button)`
  color: black;
  padding: 10px 18px;
  background-color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s;
  }
`;
