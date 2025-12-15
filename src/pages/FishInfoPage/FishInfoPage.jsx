import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FishInfoPage.css';

const FishInfoPage = () => {
  const { city, water, fish } = useParams();
  const navigate = useNavigate();

  const [showEditModal, setShowEditModal] = useState(false);
  const [fishInfo, setFishInfo] = useState({
    name: fish,
    description: `Nėra daug žinoma apie šią žuvį. Jei turite informacijos, prašome ja pasidalinti.`,
    seasons: 'Pavasaris, Vasara',
    catchTimeStart: 1,
    catchTimeEnd: 23
  });

  

  const handleDelete = () => {
    alert(`Žuvis ${fishInfo.name} buvo ištrinta`);
    navigate(-1);
  };

  const handleEditSave = () => {
    alert(`Mock save: ${JSON.stringify(fishInfo)}`);
    setShowEditModal(false);
  };

  return (
    <main className="fish-info-page">
      <h2>{fishInfo.name} Turima informacija apie šią žuvį:</h2>

      <div className="fish-details">
        <p><strong>Aprašas:</strong> {fishInfo.description}</p>
        <p><strong>Metų laikai:</strong> {fishInfo.seasons}</p>
        <p><strong>Pagaunama šiomis valandomis:</strong> {fishInfo.catchTimeStart} - {fishInfo.catchTimeEnd}</p>
      </div>

      <div className="fish-actions">
        <button className="action-btn" onClick={() => setShowEditModal(true)}>
          Redaguoti
        </button>
        <button className="action-btn" onClick={handleDelete}>
          Ištrinti
        </button>
      </div>

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Redaguoti žuvį</h3>
            <label>
              Name:
              <input
                type="text"
                value={fishInfo.name}
                onChange={(e) => setFishInfo({ ...fishInfo, name: e.target.value })}
              />
            </label>
            <label>
              Aprašas:
              <textarea
                value={fishInfo.description}
                onChange={(e) => setFishInfo({ ...fishInfo, description: e.target.value })}
              />
            </label>
            <label>
              Metų laikai:
              <input
                type="text"
                value={fishInfo.seasons}
                onChange={(e) => setFishInfo({ ...fishInfo, seasons: e.target.value })}
              />
            </label>
            <label>
              Nuo kada pagaunama:
              <input
                type="number"
                min={0}
                max={23}
                value={fishInfo.catchTimeStart}
                onChange={(e) =>
                  setFishInfo({ ...fishInfo, catchTimeStart: Number(e.target.value) })
                }
              />
            </label>
            <label>
              Iki kada pagaunama:
              <input
                type="number"
                min={0}
                max={23}
                value={fishInfo.catchTimeEnd}
                onChange={(e) =>
                  setFishInfo({ ...fishInfo, catchTimeEnd: Number(e.target.value) })
                }
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
    </main>
  );
};

export default FishInfoPage;
