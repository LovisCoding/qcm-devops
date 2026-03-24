import React, { useState, useEffect } from 'react';

export default function Quiz({ questions, current, score, onAnswer, onNext }) {
  const [answered, setAnswered] = useState(false);
  const [chosenIdx, setChosenIdx] = useState(null);

  // Reset local state when current question changes
  useEffect(() => {
    setAnswered(false);
    setChosenIdx(null);
  }, [current]);

  const q = questions[current];
  const total = questions.length;
  const pct = Math.round((current / total) * 100);

  const handleSelect = (idx) => {
    if (answered) return;
    const isOk = idx === q.correct;
    setAnswered(true);
    setChosenIdx(idx);
    onAnswer(idx, isOk);
  };

  const getBtnClass = (idx) => {
    if (!answered) return 'option-btn';
    if (idx === q.correct) return 'option-btn correct';
    if (idx === chosenIdx) return 'option-btn wrong';
    return 'option-btn revealed';
  };

  const letters = ['A', 'B', 'C', 'D'];
  const isCorrectChoice = chosenIdx === q.correct;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!answered) {
        const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        const key = e.key.toLowerCase();
        if (map[key] !== undefined) handleSelect(map[key]);
      } else if (e.key === 'Enter' || e.key === ' ') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [answered, current]);

  return (
    <div id="screen-quiz" className="screen active">
      <header className="quiz-header">
        <div className="quiz-logo">DevOps QCM</div>
        <div className="quiz-meta">
          <span>{current + 1} / {total}</span>
          <span id="score-live">Score : {score}</span>
        </div>
      </header>

      <div className="progress-wrap">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }}></div>
        </div>
        <span id="progress-pct">{pct}%</span>
      </div>

      <main className="quiz-main">
        <div className="category-badge">{q.category}</div>
        <h2 className="question-text" dangerouslySetInnerHTML={{ __html: q.question }}></h2>

        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={getBtnClass(i)}
              disabled={answered}
              onClick={() => handleSelect(i)}
            >
              <span className="option-letter">{letters[i]}</span>
              <span className="option-text" dangerouslySetInnerHTML={{ __html: opt }}></span>
            </button>
          ))}
        </div>

        {answered && (
          <div className="explanation-box">
            <div className={`explanation-icon ${isCorrectChoice ? 'ok' : 'ko'}`}>
              {isCorrectChoice ? '✓' : '✗'}
            </div>
            <div>
              <p className={`explanation-verdict ${isCorrectChoice ? 'ok' : 'ko'}`}>
                {isCorrectChoice ? 'Bonne réponse !' : 'Raté — mais maintenant tu sais !'}
              </p>
              <p className="explanation-text" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
            </div>
          </div>
        )}

        {answered && (
          <button className="btn-next" onClick={onNext}>
            {current + 1 < total ? 'Question suivante →' : 'Voir mes résultats 🏆'}
          </button>
        )}
      </main>
    </div>
  );
}
