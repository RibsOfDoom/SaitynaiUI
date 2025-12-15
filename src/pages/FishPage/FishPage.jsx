import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './FishPage.css';

const FishPage = () => {
  const { city, water } = useParams();
  const navigate = useNavigate();

  // Fishes state
  const [fishes, setFishes] = useState(['Karpis', 'Lydeka', 'Ešerys', 'Ungurys']); // mockup list

  // Description state
  const [showEditModal, setShowEditModal] = useState(false);
  const [newDescription, setNewDescription] = useState(
    `Žuvys kurias galite pagauti: ${water}, ${city}.`
  );

  // Add fish modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newFishName, setNewFishName] = useState('');

  const handleDelete = () => {
    alert(`Vandens telkinys ${water} buvo ištrintas`);
    navigate(-1); // go back one page
  };

  const handleEditSave = () => {
    alert(`Mock save: ${newDescription}`);
    setShowEditModal(false);
  };

  const handleAddFish = () => {
    if (newFishName.trim()) {
      setFishes([...fishes, newFishName.trim()]);
      setNewFishName('');
      setShowAddModal(false);
    } else {
      alert('Prašome įvesti žuvies pavadinimą.');
    }
  };

  return (
    <main className="fish-page">
      <h2>
        {water}, {city} - Žuvų sąrašas.
      </h2>

      {/* Description */}
      <p className="fish-description">{newDescription}</p>
      
      {/* Fish list as stacked buttons */}
      <div className="fish-list">
        {fishes.map((fish, index) => (
          <Link
            key={index}
            to={`/city/${city}/${water}/fish/${fish}`}
            className="fish-link"
          >
            <button className="action-btn">{fish}</button>
          </Link>
        ))}
      </div>

      {/* Mock action buttons */}
      <div className="fish-actions">
        <button className="action-btn" onClick={() => setShowEditModal(true)}>
          Redaguoti
        </button>
        <button className="action-btn" onClick={handleDelete}>
          Ištrinti
        </button>
      </div>
      <button className="action-btn" onClick={() => setShowAddModal(true)}>
          Pridėti naują žuvį
      </button>

      {/* Edit description modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Redaguoti aprašymą</h3>
            <label>
              Naujas aprašymas:
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </label>
            <div className="modal-buttons">
              <button className="action-btn" onClick={handleEditSave}>
                Išsaugoti
              </button>
              <button
                className="action-btn"
                onClick={() => setShowEditModal(false)}
              >
                Atšaukti
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add fish modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Pridėti naują žuvį</h3>
            <label>
              Pavadinimas:
              <input
                type="text"
                value={newFishName}
                onChange={(e) => setNewFishName(e.target.value)}
              />
            </label>
            <div className="modal-buttons">
              <button className="action-btn" onClick={handleAddFish}>
                Pridėti
              </button>
              <button
                className="action-btn"
                onClick={() => setShowAddModal(false)}
              >
                Atšaukti
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default FishPage;
