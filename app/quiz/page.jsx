'use client';
import React, { useState } from 'react';
import { quizCategories } from '../data.js';

const page = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  
  const selectCategory = (category) => {
    setActiveCategory(category);
    setActiveQuestion(0); 
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setShowResult(false);
  };

  
  if (!activeCategory) {
    return (
      <div className="container">
        <h1>Choose Categories</h1>
        

        {/* Container pentru categoriile de quiz */}
        <div className="categories-container">
          <div className="category-card japanese-background" onClick={() => selectCategory(quizCategories[0])}>
            <h3>Japanese Culture</h3>
          </div>
          <div className="category-card chinese-background" onClick={() => selectCategory(quizCategories[1])}>
            <h3>Chinese Culture</h3>
          </div>
          <div className="category-card hindu-background" onClick={() => selectCategory(quizCategories[2])}>
            <h3>Hindu Culture</h3>
          </div>
          <div className="category-card slavic-background" onClick={() => selectCategory(quizCategories[3])}>
            <h3>Slavic Culture</h3>
          </div>
        </div>
      </div>
    );
  }

  const { questions } = activeCategory;
  if (!questions || questions.length === 0) {
    return <div>No questions available for this category.</div>; 
  }

  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    if (!questions || questions.length === 0) return; 

    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <h1>{activeCategory.name} Quiz</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / (questions.length * 5)) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => selectCategory(null)}>Select Another Category</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;