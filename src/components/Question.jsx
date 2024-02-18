import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import questions from "../question";
export default function Quesiton({
  currentQuestion,
  onSelectAnswer,
  handleSkipAnswer,
}) {
  const [currentanswerState, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (currentanswerState.selectedAnswer) {
    timer = 2000;
  }
  if (currentanswerState.isCorrect != null) {
    timer = 1000;
  }

  function handleSelectAnswer(answer) {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: questions[currentQuestion].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (
    currentanswerState.selectedAnswer &&
    currentanswerState.isCorrect != null
  ) {
    answerState = currentanswerState.isCorrect ? "correct" : "incorrect";
  } else if (currentanswerState.selectedAnswer) {
    answerState = "selected";
  }

  return (
    <div id="questions">
      <QuestionTimer
        key={timer}
        onTimeout={
          currentanswerState.selectedAnswer === "" ? handleSkipAnswer : function(){}
        }
        timeout={timer}
        mode={answerState}
      />
      <h2>{questions[currentQuestion].text}</h2>
      <Answers
        answers={questions[currentQuestion].answers}
        selectedAnswer={currentanswerState.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
