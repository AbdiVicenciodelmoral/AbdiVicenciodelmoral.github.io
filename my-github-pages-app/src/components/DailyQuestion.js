import React, { useState } from 'react';
import './DailyQuestion.css';

const DailyQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const correctAnswer = 'B';

  const handleClick = (answer) => {
    if (!answered) {
      setSelectedAnswer(answer);
      setAnswered(true);
    }
  };

  const getAnswerClass = (answer) => {
    if (!answered) return '';
    return answer === correctAnswer ? 'correct' : 'incorrect';
  };

  return (
    <div className="daily-question">
      <h2>Daily Machine Learning Question</h2>
      <p>Question: What is overfitting in machine learning?</p>
      <ul>
        <li 
          className={getAnswerClass('A')}
          onClick={() => handleClick('A')}
        >
          A. When a model is too simple and performs poorly on training data.
        </li>
        <li 
          className={getAnswerClass('B')}
          onClick={() => handleClick('B')}
        >
          B. When a model performs well on training data but poorly on unseen data.
        </li>
        <li 
          className={getAnswerClass('C')}
          onClick={() => handleClick('C')}
        >
          C. When a model is too complex and performs well on unseen data.
        </li>
        <li 
          className={getAnswerClass('D')}
          onClick={() => handleClick('D')}
        >
          D. When a model is neither too simple nor too complex.
        </li>
      </ul>
    </div>
  );
};

export default DailyQuestion;
