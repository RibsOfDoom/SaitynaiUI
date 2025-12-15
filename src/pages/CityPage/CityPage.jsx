import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CityPage.css';

const CityPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [waters, setWaters] = useState(['Neris', 'Nemunas', 'Baikalas']);

  const [showEditModal, setShowEditModal] = useState(false);
  const [newCityName, setNewCityName] = useState(city);
  const [newCityDescription, setNewCityDescription] = useState(
    `Čia ${city}! Gan tankiai populiuotas, tačiau daug žvejybinio potencialo turintis miestas.`
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const [newWater, setNewWater] = useState({ name: '', description: '' });

  const handleDelete = () => {
    alert(`Miestas ${city} buvo ištrintas`);
    navigate(-1);
  };

  const handleEditSave = () => {
    alert(`Mock save: ${newCityName} - ${newCityDescription}`);
    setShowEditModal(false);
  };

  const handleAddWater = () => {
    if (newWater.name.trim()) {
      setWaters([...waters, newWater.name]);
      setNewWater({ name: '', description: '' });
      setShowAddModal(false);
    } else {
      alert('Prašome įvesti vandens telkinio pavadinimą.');
    }
  };

  return (
    <main className="city-page">
      <h2>{newCityName} - Vandens telkiniai.</h2>

      <p className="city-description">{newCityDescription}</p>

      <div className="water-list">
        {waters.map((water, index) => (
          <Link key={index} to={`/city/${city}/${water}/fish`} className="water-link">
            <button className="action-btn">{water}</button>
          </Link>
        ))}
      </div>

      <div className="city-actions">
        <button className="action-btn" onClick={() => setShowEditModal(true)}>
          Redaguoti
        </button>
        <button className="action-btn" onClick={handleDelete}>
          Ištrinti
        </button>
      </div>

      <button className="action-btn" onClick={() => setShowAddModal(true)}>
        Pridėti naują vandens telkinį
      </button>


      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Redaguoti miestą</h3>
            <label>
              Naujas miesto pavadinimas:
              <input
                type="text"
                value={newCityName}
                onChange={(e) => setNewCityName(e.target.value)}
              />
            </label>
            <label>
              Naujas aprašymas:
              <textarea
                value={newCityDescription}
                onChange={(e) => setNewCityDescription(e.target.value)}
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
      
      {showAddModal && (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Pridėti naują vandens telkinį</h3>
          <label>
            Pavadinimas:
            <input
              type="text"
              value={newWater.name}
              onChange={(e) => setNewWater({ ...newWater, name: e.target.value })}
            />
          </label>
          <label>
            Aprašymas:
            <textarea
              value={newWater.description}
              onChange={(e) => setNewWater({ ...newWater, description: e.target.value })}
            />
          </label>
          <div className="modal-buttons">
            <button className="action-btn" onClick={handleAddWater}>Pridėti</button>
            <button className="action-btn" onClick={() => setShowAddModal(false)}>Atšaukti</button>
          </div>
        </div>
      </div>
    )}
    </main>
  );
};

export default CityPage;
