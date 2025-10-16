import React from "react";

function FavoritesList({ favorites, onSelectCity, onRemove }) {
    if (!favorites || favorites.length === 0) return null;

    return (
        <div className="favorites-list mt-4">
            <h3>Обрані міста</h3>
            <ul className="list-group">
                {favorites.map((cityObj, i) => (
                    <li
                        key={i}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
            <span
                style={{ cursor: "pointer" }}
                onClick={() => onSelectCity(cityObj)}
            >
              {cityObj.city}, {cityObj.country}
                {cityObj.admin1 ? `, ${cityObj.admin1}` : ""}
            </span>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => onRemove(cityObj)}
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesList;
