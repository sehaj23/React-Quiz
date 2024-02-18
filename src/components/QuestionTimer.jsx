import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout,mode }) {
  const [remainingTime, setReaminingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const invterval = setInterval(() => {
      setReaminingTime((prevState) => {
        return prevState - 10;
      });
    }, 10);

    return () => {
      clearInterval(invterval);
    };
  }, []);

  return (
    <div>
      <progress id="question-time" value={remainingTime} max={timeout} className={mode} />
    </div>
  );
}
