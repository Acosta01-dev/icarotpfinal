import React from 'react';
import './Filters.css';

const Filters = ({ searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, sortOrder, setSortOrder }) => {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio mínimo"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio máximo"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button onClick={() => setSortOrder('asc')}>Ordenar: Más Barato</button>
            <button onClick={() => setSortOrder('desc')}>Ordenar: Más Caro</button>
        </div>
    );
};

export default Filters;
