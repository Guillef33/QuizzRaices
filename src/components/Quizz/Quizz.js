import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

function Quizz() {
  const {
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
  } = useContext(AppContext);

  return (
    <>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={(e) => restartGame(e)}>Play Again</button>
        </div>
      ) : (
        <div className="question-container">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <img
              className="question-image"
              src={questions[currentQuestion].image}
              alt="images"
            />

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="playGameButton"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Quizz;
