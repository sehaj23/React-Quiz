import quizCompleteTrophy from "../assets/quiz-complete.png";

import Questions from "../question.js";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  console.log(correctAnswers.length)
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare =  100 - skippedAnswersShare - correctAnswersShare

  return (
    <div id="summary">
      <img src={quizCompleteTrophy} alt="Quiz Trophy"></img>
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>

          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>

          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>

          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer == null) {
            cssClass += " skipped";
          } else if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}> {answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
