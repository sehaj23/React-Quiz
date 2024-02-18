import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];
    shuffledAnswer.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = "";
        if (answerState == "selected" && isSelected) {
          cssClass = "selected";
        }
        if (answerState == "incorrect" && isSelected) {
          cssClass = "wrong";
        }
        if (answerState == "correct" && isSelected) {
          cssClass = "correct";
        }
        return (
          <li className="answer" key={answer}>
            <button className={cssClass} onClick={() => onSelect(answer)} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
