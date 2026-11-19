import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/views/Home.jsx';
import About from './components/views/About.jsx';
import AddItem from './components/views/AddItem.jsx';
import { loadItems } from './api';
import './App.css';



export default function App() {

const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);


    const [gameItems, setGameItems] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(() => {
    return localStorage.getItem('myProject.selectedGenre') || 'All';
  });
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem('myProject.searchTerm') || '';
  });
  const [selectedPlatform, setSelectedPlatform] = useState(() => {
    return localStorage.getItem('myProject.selectedPlatform') || 'All';
  });
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const storedFavorites = localStorage.getItem('myProject.favoriteIds');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

    useEffect(() => {
      let isMounted = true;

      loadItems( setIsLoading, setError).then((data) => {
        if (isMounted) {
          setGameItems(data);
          setIsLoading(false);
        }
      }).catch(() => {
        
      });
      return () => {
        isMounted = false;
      };

    }, []);





  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home selectedGenre={selectedGenre} searchTerm={searchTerm} selectedPlatform={selectedPlatform} favoriteIds={favoriteIds} setSelectedGenre={setSelectedGenre} setSearchTerm={setSearchTerm} setSelectedPlatform={setSelectedPlatform} setFavoriteIds={setFavoriteIds} gameItems={gameItems} />} />
        <Route path="/about" element={<About gameItems={gameItems} />} />
        <Route path="/add" element={<AddItem gameItems={gameItems} setGameItems={setGameItems} />} />
      </Routes>
    </BrowserRouter>
  );

}