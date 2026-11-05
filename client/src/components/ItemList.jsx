import ItemCard from './ItemCard';

export default function ItemList({items, favoriteIds, onToggleFavorite}) {
    if (items.length === 0) {
        return <p>No matching games were found.</p>
    }

        return(
            <section id="game-collection">
                {items.map(item => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        isFavorite={favoriteIds.includes(item.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </section>
        )
}
