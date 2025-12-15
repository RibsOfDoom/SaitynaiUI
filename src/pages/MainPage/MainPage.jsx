import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [cities, setCities] = useState([
    { name: 'Kaunas', description: 'Kaunas vandens telkiniai.' },
    { name: 'Vilnius', description: 'Vilnius vandens telkiniai.' }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCity, setNewCity] = useState({ name: '', description: '' });

  const handleAddCity = () => {
    if (newCity.name.trim()) {
      setCities([...cities, newCity]);
      setNewCity({ name: '', description: '' });
      setShowAddModal(false);
    } else {
      alert('Prašome įvesti miesto pavadinimą.');
    }
  };

  return (
    <main className="main-page">

      <p className="main-description">
        Sveiki atvykę į zvejyba.lt, čia galite rasti visą aktualiausią informaciją apie žuvis bei vandens telkinius.
      </p>

      {/* Cities menu */}
      <div className="city-list">
        {cities.map((city, index) => (
          <Link key={index} to={`/city/${city.name}/waters`}>
            <button className="city-btn">{city.name}</button>
          </Link>
        ))}
      </div>

      <button className="action-btn" onClick={() => setShowAddModal(true)}>
        Pridėti naują miestą
      </button>

      {/* Add City Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Pridėti naują miestą</h3>
            <label>
              Miesto pavadinimas:
              <input
                type="text"
                value={newCity.name}
                onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
              />
            </label>
            <label>
              Aprašymas:
              <textarea
                value={newCity.description}
                onChange={(e) => setNewCity({ ...newCity, description: e.target.value })}
              />
            </label>
            <div className="modal-buttons">
              <button className="action-btn" onClick={handleAddCity}>Pridėti</button>
              <button className="action-btn" onClick={() => setShowAddModal(false)}>Atšaukti</button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default MainPage;
