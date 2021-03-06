import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import "./Quizz.css";

function Quizz() {
  const {
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
    handleClose,
  } = useContext(AppContext);

  return (
    <>
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          {/* {losing 

          } */}
          <p>
            SHOCKED WITH THE RESULTS? Congratulations, there is still much to
            learn! <br />
            Do not worry. 90% of the wine connoisseurs confess that they have
            never heard of some of the Spanish varieties mentioned. <br />
            Come & join us in the Prowein stand number XX of RAICESIBERICAS in
            HALL 14, every day we will be uncovering a new autochthonous variety
            or an unknown DO.
          </p>

          {/* Aca deberia ir el mensaje de Perdiste, se te acbo el t */}

          <button onClick={(e) => restartGame(e)}>Play Again</button>
        </div>
      ) : (
        <div className="question-container">
          <button className="closeBtn" onClick={handleClose}>
            X
          </button>
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
              <>
                <button
                  className="playGameButton"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              </>
            ))}
          </div>
          <button
            className="playGameButton"
            onClick={() => handleAnswerOptionClick()}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Quizz;
