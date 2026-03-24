import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Review from './components/Review';
import { QUESTIONS } from './data/questions';
import './index.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = ({ numQuestions, selectedCategories }) => {
    let filtered = QUESTIONS.filter(q => selectedCategories.includes(q.category));
    filtered = shuffle(filtered);
    if (numQuestions !== 'all') {
      filtered = filtered.slice(0, parseInt(numQuestions, 10));
    }
    setQuestions(filtered);
    setCurrent(0);
    setScore(0);
    setUserAnswers([]);
    setScreen('quiz');
  };

  const handleAnswer = (chosen, isOk) => {
    setUserAnswers(prev => [...prev, { qIdx: current, chosen, correct: isOk }]);
    if (isOk) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1);
    } else {
      setScreen('results');
    }
  };

  return (
    <>
      {screen === 'home' && <Home onStart={startQuiz} />}
      {screen === 'quiz' && (
        <Quiz
          questions={questions}
          current={current}
          score={score}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      {screen === 'results' && (
        <Results
          score={score}
          total={questions.length}
          questions={questions}
          userAnswers={userAnswers}
          onRestart={startQuiz}
          onReview={() => setScreen('review')}
        />
      )}
      {screen === 'review' && (
        <Review
          questions={questions}
          userAnswers={userAnswers}
          onBack={() => setScreen('results')}
        />
      )}
    </>
  );
}
