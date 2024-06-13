// DailyQuestion.js
import React from 'react';
import './DailyQuestion.css';

const DailyQuestion = () => {
  return (
    <div className="daily-question">
      <h2>Daily Machine Learning Question</h2>
      <p>Question: What is overfitting in machine learning?</p>
      <ul>
        <li>A. When a model is too simple and performs poorly on training data.</li>
        <li>B. When a model performs well on training data but poorly on unseen data.</li>
        <li>C. When a model is too complex and performs well on unseen data.</li>
        <li>D. When a model is neither too simple nor too complex.</li>
      </ul>
    </div>
  );
};

export default DailyQuestion;