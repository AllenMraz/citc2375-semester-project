
import ItemList from '../ItemList.jsx';
import Header from '../Header.jsx';

export default function Home({ selectedGenre, searchTerm, selectedPlatform, favoriteIds, setSelectedGenre, setSearchTerm, setSelectedPlatform, setFavoriteIds, gameItems }) {

  function handleGenreChange(event) {
    const genre = event.target.value;

    setSelectedGenre(genre);
    localStorage.setItem(
      'myProject.selectedGenre', genre
    );
  }

  function handleSearchChange(event) {
    const search = event.target.value;
    setSearchTerm(search);
    localStorage.setItem(
      'myProject.searchTerm', search
    );
  }

  function handlePlatformChange(event) {
    const platform = event.target.value;
    setSelectedPlatform(platform);
    localStorage.setItem(
      'myProject.selectedPlatform', platform
    );
  }

  function handleToggleFavorite(itemId) {
    const updated = favoriteIds.includes(itemId)
      ? favoriteIds.filter(id => id !== itemId)
      : [...favoriteIds, itemId];

    setFavoriteIds(updated);
    localStorage.setItem(
      'myProject.favoriteIds', JSON.stringify(updated)
    );
  }

  const filteredItems = gameItems.filter(item => {
    console.log(item);
    const genreMatch = selectedGenre === 'All' ? true : item.genre === selectedGenre;
    const platformMatch = selectedPlatform === 'All' ? true : item.platform.includes(selectedPlatform);
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return genreMatch && platformMatch && searchMatch;
  });

  return (
    <>
      <Header />

      <main>
        <p className="page-description font-bold">This is the main page of my game collection.</p>
        <hr />
        <section className="collection-header">
          <h2 className="section-title">Games</h2>
          <p className="section-description">These are some of the games in my collection.</p>
        </section>
        <hr />

        <section className="filter-section">
          <div className="filter-container">
            <label htmlFor="genre-select">Filter by Genre:
              <select className="filter-select" id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
                <option value="All">All</option>
                <option value="Action-Adventure">Action-Adventure</option>
                <option value="Farming">Farming</option>
                <option value="RPG">RPG</option>
                <option value="Colony Management">Colony Management</option>
                <option value="Roguelike">Roguelike</option>
              </select>
            </label>

            <label htmlFor="platform-select">Filter by Platform:
              <select className="filter-select" id="platform-select" value={selectedPlatform} onChange={handlePlatformChange}>
                <option value="All">All</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
                <option value="Nintendo">Nintendo</option>
              </select>
            </label>

            <label htmlFor="search-input">Search by Name:
              <input
                type="text"
                className="filter-input"
                id="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search games..."
              />
            </label>
          </div>
        </section>

        <ItemList items={filteredItems} favoriteIds={favoriteIds} onToggleFavorite={handleToggleFavorite} />
      </main>

    </>
  );
}