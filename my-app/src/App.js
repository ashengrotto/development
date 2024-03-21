import "./App.css";
import React, { useState } from 'react';
import FilteredList from './components/FilteredList';
import perfumeData from './assets/perfumeData.json';
 import PerfumeCard from "./components/PerfumeCard";

const App = () => {
    const [perfumes] = useState(perfumeData);
    const [collection, setCollection] = useState([]);

    const addToCollection = (perfume) => {
        const alreadyInCollection = collection.some(item => item.id === perfume.id);
        
        if (!alreadyInCollection) {
            setCollection([...collection, perfume]);
        }
    };

    const removeFromCollection = (perfumeId) => {
      const updatedCollection = collection.filter(perfume => perfume.id !== perfumeId);
      setCollection(updatedCollection);
  };
  

  return (
    <div className="perfume-list">
        <h1>Browse Perfumes</h1>
        <FilteredList perfumes={perfumes} onClick={addToCollection} collection="Add to Collection" />

        <div className="collection">
        <h1>My Collection ({collection.length} items)</h1>
            <div className="collection-gallery">

            {collection.map(perfume => (
                <PerfumeCard
                    key={perfume.id}
                    perfume={perfume}
                    onClick={() => removeFromCollection(perfume.id)}
                    collection="Remove from Collection"
                />
            ))}
        </div>
      </div>
    </div>
    );
};
   
export default App;

