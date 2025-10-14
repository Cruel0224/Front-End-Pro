import React from "react";

function FavoritesList({ favorites, onSelectCity, onRemove }) {
    if (favorites.length === 0) return null;

    return (
        <div className="favorites">
            <h3>Обрані міста:</h3>
            <ul>
                {favorites.map((city) => (
                    <li key={city}>
                        <span onClick={() => onSelectCity(city)}>{city}</span>
                        <button onClick={() => onRemove(city)}>×</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesList;
