import React, { useEffect, useState } from 'react';
import { CATEGORIES } from '../data/questions';

export default function Results({ score, total, userAnswers, questions, onRestart, onReview }) {
  const [strokeOffset, setStrokeOffset] = useState(314);
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    // Animate donut chart
    const circumference = 314;
    const offset = circumference - (circumference * pct) / 100;
    const timer = setTimeout(() => {
      setStrokeOffset(offset);
    }, 200);
    return () => clearTimeout(timer);
  }, [pct]);

  let trophy, rank, msg;
  if (pct === 100) {
    trophy = '🏆'; rank = 'Légende DevOps !';
    msg = 'Score parfait ! Tu maîtrises absolument tout le cours — Florian Forestier serait fier de toi.';
  } else if (pct >= 80) {
    trophy = '🥇'; rank = 'DevOps Guru';
    msg = 'Excellent ! Tu as une solide maîtrise du DevOps. Encore quelques révisions sur les points ratés et tu seras imbattable à l\'examen.';
  } else if (pct >= 60) {
    trophy = '🥈'; rank = 'DevOps Praticien';
    msg = 'Pas mal ! Tu connais les bases, mais certains concepts méritent encore un peu de travail. Relis les slides sur les thèmes ratés.';
  } else if (pct >= 40) {
    trophy = '🥉'; rank = 'DevOps Apprenti';
    msg = 'Il reste du boulot ! Reprends le cours depuis le début, concentre-toi sur les thèmes où tu as le moins bien réussi.';
  } else {
    trophy = '🐣'; rank = 'Novice en formation';
    msg = 'Pas de panique ! Le DevOps est un domaine riche. Commence par relire les slides sur la philosophie DevOps et l\'hyperviseur, puis remonte dans les TPs.';
  }

  // Calculate category breakdown
  const catMap = {};
  CATEGORIES.forEach(c => { catMap[c] = { total: 0, correct: 0 }; });
  userAnswers.forEach(a => {
    const cat = questions[a.qIdx].category;
    catMap[cat].total++;
    if (a.correct) catMap[cat].correct++;
  });

  return (
    <div id="screen-results" className="screen active">
      <div className="results-content">
        <div className="results-trophy">{trophy}</div>
        <h2 className="results-rank">{rank}</h2>
        <p className="results-score">Score : {score} / {total} ({pct}%)</p>
        <p className="results-msg">{msg}</p>

        <div className="results-chart">
          <svg viewBox="0 0 120 120" className="donut-svg">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1e2a3a" strokeWidth="14" />
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad)" strokeWidth="14"
                    strokeDasharray="314" strokeDashoffset={strokeOffset}
                    strokeLinecap="round" transform="rotate(-90 60 60)"
                    style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)' }} />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <div className="donut-label">{pct}%</div>
        </div>

        <div className="results-breakdown">
          {Object.entries(catMap).map(([cat, data]) => {
            if (data.total === 0) return null;
            const catPct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={cat} className="breakdown-row">
                <span className="breakdown-cat">{cat}</span>
                <div className="breakdown-bar-wrap">
                  <div className="breakdown-bar" style={{ width: `${catPct}%` }}></div>
                </div>
                <span className="breakdown-score">{data.correct}/{data.total}</span>
              </div>
            );
          })}
        </div>

        <div className="results-actions">
          <button className="btn-primary" onClick={onRestart}>Recommencer 🔄</button>
          <button className="btn-secondary" onClick={onReview}>Revoir les erreurs 📋</button>
        </div>
      </div>
    </div>
  );
}
