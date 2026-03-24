import React, { useState } from 'react';
import { CATEGORIES } from '../data/questions';

export default function Home({ onStart }) {
  const [numQuestions, setNumQuestions] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);

  const handleCategoryChange = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleStart = () => {
    if (selectedCategories.length === 0) {
      alert("Veuillez sélectionner au moins un thème.");
      return;
    }
    onStart({ numQuestions, selectedCategories });
  };

  return (
    <div id="screen-home" className="screen active">
      <div className="home-bg"></div>
      <div className="home-content">
        <div className="badge">DevOps M1 · ISIM A</div>
        <h1>Quiz DevOps<br/><span className="gradient-text">Maîtrise le cours</span></h1>
        <p className="subtitle">Personnalisez votre session de révision : choisissez le nombre de questions et les thèmes à aborder.</p>
        
        <div className="options-section">
          <div className="option-group">
            <h3>Nombre de questions</h3>
            <div className="segmented-control">
              {['10', '20', 'all'].map(val => (
                <button 
                  key={val}
                  className={`segment-btn ${numQuestions === val ? 'active' : ''}`}
                  onClick={() => setNumQuestions(val)}
                >
                  {val === 'all' ? 'Toutes' : val}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h3>Thèmes</h3>
            <div className="theme-toggle-group">
              {CATEGORIES.map(cat => {
                const isActive = selectedCategories.includes(cat);
                return (
                  <button 
                    key={cat}
                    className={`theme-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <button className="btn-primary" onClick={handleStart}>Commencer le Quiz →</button>
      </div>
    </div>
  );
}
