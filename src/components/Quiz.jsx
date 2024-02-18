import { useState, useCallback, useEffect } from "react";
import questions from "../question";
import Summary from "./Summary";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Quesiton from "./Question";
export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState([]);
  const activeCurrentQuestion = userAnswers.length;

  const quizComplete = activeCurrentQuestion === questions.length - 1;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prevState) => {
      return [...prevState, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Quesiton
        key={activeCurrentQuestion}
        currentQuestion={activeCurrentQuestion}
        onSelectAnswer={handleSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
