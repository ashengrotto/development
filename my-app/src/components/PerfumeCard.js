import React from 'react';

const PerfumeCard = ({ perfume, onClick, collection }) => {
    const addToCollection = () => {
        onClick(perfume);
    };

    return (
        <div className="perfume-card">
            <img src={perfume.image} alt={perfume.name} />
            <h2>{perfume.name}</h2>
            <h3>{perfume.house}</h3>
            <p>{perfume.category}</p>
            <p>${perfume.price} / {perfume.size} ml</p>
            <button onClick={addToCollection}>{collection}</button>
        </div>
    );
};

export default PerfumeCard;
