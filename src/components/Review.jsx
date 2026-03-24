import React from 'react';

export default function Review({ questions, userAnswers, onBack }) {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div id="screen-review" className="screen active">
      <header className="quiz-header">
        <div className="quiz-logo">DevOps QCM</div>
        <button className="btn-back" onClick={onBack}>← Résultats</button>
      </header>
      
      <div className="review-content">
        {userAnswers.map((a, num) => {
          const q = questions[a.qIdx];
          const isWrongClass = a.correct ? '' : ' was-wrong';

          return (
            <div key={num} className={`review-item${isWrongClass}`}>
              <div className="review-q">Question {num + 1} · {q.category}</div>
              <div className="review-question" dangerouslySetInnerHTML={{ __html: q.question }}></div>
              <div className="review-answers">
                {q.options.map((opt, i) => {
                  let cls = '';
                  if (i === q.correct) cls = 'correct';
                  else if (i === a.chosen && !a.correct) cls = 'user-wrong';
                  
                  if (!cls) return null;
                  
                  const label = i === q.correct ? '✓ Bonne réponse' : '✗ Votre réponse';
                  return (
                    <div key={i} className={`review-answer ${cls}`}>
                      {label} ({letters[i]}) : <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                    </div>
                  );
                })}
              </div>
              <div className="review-explanation" dangerouslySetInnerHTML={{ __html: q.explanation }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
