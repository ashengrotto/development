import React, { useState, useEffect } from 'react';
import PerfumeCard from './PerfumeCard';

const FilteredList = ({ perfumes, onClick, collection }) => {
    const [filteredPerfumes, setFilteredPerfumes] = useState([]);
    const [filterType, setFilterType] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        let sortedPerfumes = [...perfumes];
        if (filterType) {
            sortedPerfumes = sortedPerfumes.filter(perfume => perfume.category === filterType);
        }
        if (sortBy === 'priceLowToHigh') {
            sortedPerfumes.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighToLow') {
            sortedPerfumes.sort((a, b) => b.price - a.price);
        }
        setFilteredPerfumes(sortedPerfumes);
    }, [perfumes, filterType, sortBy]);

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleReset = () => {
        setFilterType('');
        setSortBy('');
    };

    return (
        <div className="filtered-list">
            <div className="filter-container">
                <label htmlFor="filterType">Filter by Category:</label>
                <select id="filterType" value={filterType} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="Amber">Amber</option>
                    <option value="Gourmand">Gourmand</option>
                    <option value="Floral">Floral</option>
                </select>
            </div>
            <div className="sort-container">
                <label htmlFor="sortBy">Sort by Price:</label>
                <select id="sortBy" value={sortBy} onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="priceLowToHigh">Low to High</option>
                    <option value="priceHighToLow">High to Low</option>
                </select>
            </div>
            <div className="reset-container">
                <button onClick={handleReset}>Reset All</button>
            </div>
            <div className="perfume-cards">
                {filteredPerfumes.map(perfume => (
                    <PerfumeCard
                        key={perfume.id}
                        perfume={perfume}
                        onClick={onClick}
                        collection={collection}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilteredList;