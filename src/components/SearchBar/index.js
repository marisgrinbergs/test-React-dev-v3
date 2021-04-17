// == Import npm
import React, { useState, useEffect } from 'react';

// == Import
import './styles.css';
import axios from 'axios';

// == Composant
const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([]);
    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const value = event.target.value;
        setSearch(value);
    }
    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${search}&image_type=photo`, {}, { withCredentials: true })
                .then((response) => {
                console.log('objet recu : ', response.data);
                let tab = response.data.hits.map((hit) => hit.previewURL);
                setPhotos(tab);
                });
      },[search]);

    console.log("photos", photos);
    return (
  <div>
  <form>
    <input type="text"
    name="searchBar"
    id="searchBar"
    placeholder="Recherchez"
    className="searchbar"
    onChange={handleSearch}
    />
  </form>
  <div>
      {
          photos.map((photo, i) => 
          <img src={photo}
          key={i}
          style={{width: '100px', height: '100px'}}
          />
          )
      }
      
  </div>
  </div>
)};

// == Export
export default SearchBar;
