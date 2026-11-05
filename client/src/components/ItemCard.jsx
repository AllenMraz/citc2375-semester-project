export default function ItemCard({item, isFavorite, onToggleFavorite}){
            
            return(<div className="game-card">
                <h3>{item.name}</h3>
                <img src={`images/${item.image}`} alt={item.name} className="game-image" />
                <p><strong>Genre:</strong> {item.genre}</p>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Platform:</strong> {item.platform.join(", ")}</p>
                <button type="button" className="btn favorite-btn" aria-pressed={isFavorite} onClick={() => onToggleFavorite(item.id)}>
                    {isFavorite ? "★ Favorite" : "☆ Add to favorites"}
                </button>
            </div>);
}