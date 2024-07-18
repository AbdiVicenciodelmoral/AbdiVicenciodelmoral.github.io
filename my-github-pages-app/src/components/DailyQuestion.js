import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './DailyQuestion.css';

const DailyQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]);

  /*The useEffect hook is called with two arguments:
        A function that contains the side effect code.
        An empty dependency array ([]), which means this effect runs only 
        once after the initial render, similar to componentDidMount in class components.
 */
  useEffect(()=> {
    fetch(`${process.env.PUBLIC_URL}/ml_questions.csv`)
    .then(response => { 
                        if (!response.ok) {
                                    throw new Error('Network Response was not ok' + response.statusText);
                        }
                     
                    return response.text();
                    })
    .then(data => {
        const parsedData = Papa.parse(data, {header: true}).data;
        console.log(parsedData); // Debugging: Log parsed data
        if (parsedData.length > 0){
            setQuestions(parsedData);
            setCurrentQuestion(parsedData[Math.floor(Math.random() * parsedData.length)]);
        }
        else{
            console.log("No Data Uploaded.")
        }
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation',error);
    });
  },[]);

  const handleClick = (answer) => {
    if (!answered) {
      setSelectedAnswer(answer);
      setAnswered(true);
    }
  };

  const getAnswerClass = (answer) => {
    if (!answered) return '';
    return answer === currentQuestion.correctAnswer ? 'correct' : 'incorrect';
  };

  const loadNewQuestion = (questionList = questions, askedList = askedQuestions) => {
    if (askedList.length >= questionList.length){
        console.log("Study Session Completed!");
        return;
    }
    let newIndex;
    do {
        console.log('Get questionList length:',questionList.length);
        console.log("Getting New Index");
        
        newIndex = Math.floor(Math.random() * questionList.length);
        console.log('New index =',newIndex);
        
    } while (askedList.includes(newIndex));

    
    setCurrentQuestion(questionList[newIndex]);
    
    setAskedQuestions([...askedList,newIndex]);
    setAnswered(false);
    setSelectedAnswer(null);
     console.log('New Index:', newIndex);
     console.log('Question list length',questionList.length);
    console.log('New question loaded:', questionList[newIndex]);
    console.log('Updated asked questions:', [...askedList, newIndex]);

    console.log(currentQuestion);
  };

  if(!currentQuestion){ 
    console.log("Can't find current question")
    console.log(currentQuestion);
    return <div>Loading Question...</div>}
  
  return(
    <div className='daily-question'>
        <h2>Data Science & Machine Learning Study</h2>
        <p>Question: {currentQuestion.question}</p>
        <ul>
            {['A','B','C','D'].map(option =>(
                <li key={option}>
                    <button
                    className={getAnswerClass(option)}
                    onClick={()=>handleClick(option)}
                    >
                    {option}.{currentQuestion[`answer${option}`]}
                    </button>
                </li>
            ))

            }
        </ul>
        {answered && (
            <div>
                {selectedAnswer === currentQuestion.correctAnswer ? (
                    <p>Correct!</p>
                ): <p>Incorrect. The correct answer is {currentQuestion.correctAnswer}</p>}
                <button onClick={() => loadNewQuestion()}>Load New Question</button>
            </div>
        )}
    </div>
    
  );
};

export default DailyQuestion;
