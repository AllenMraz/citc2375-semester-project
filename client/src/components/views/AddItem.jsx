import { useState } from 'react';
import Header from '../Header.jsx';


export default function AddItem({ gameItems, setGameItems }) {

    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [steamLink, setSteamLink] = useState('');
    const [xboxLink, setXboxLink] = useState('');
    const [playStationLink, setPlayStationLink] = useState('');
    const [switchLink, setSwitchLink] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newGame = {
            id: gameItems.length + 1,
            name: title,
            image: image,
            description: description,
            genre: genre,
            platform: platforms,
            links: {
                steam: steamLink,
                xbox: xboxLink,
                playStation: playStationLink,
                switch: switchLink
            }
        };
        setGameItems(prevGameItems => [...prevGameItems, newGame]);
        console.log(gameItems);
        setTitle('');
        setImage('');
        setDescription('');
        setGenre('');
        setPlatforms([]);
        setSteamLink('');
        setXboxLink('');
        setPlayStationLink('');
        setSwitchLink('');
    };

    return (
        <>
            <Header />
            <main>
                <p className="page-description">Use this form to add a new game to your collection.</p>
                <div className="form-container">
                    <form action="#" onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="game-title">
                                Game Title:
                            </label>
                            <input type="text" id="game-title" name="game-title" className="input-field " required value={title} onChange={(event) => setTitle(event.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="game-image">
                                Game Image URL:
                            </label>
                            <input type="url" id="game-image" name="game-image" className="input-field" required value={image} onChange={(event) => setImage(event.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="game-discription">
                                Game Description:
                                <textarea id="game-discription" name="game-discription" className="input-field" required minLength="15"
                                    maxLength="300" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="game-gener">
                                Game Genre:
                                <input type="text" id="game-gener" name="game-gener" className="input-field" required value={genre} onChange={(event) => setGenre(event.target.value)} />
                            </label>
                        </fieldset>
                        <fieldset className="two-column">
                            <p className="two-wide">Game Platforms:</p>
                            <label htmlFor="PC">
                                <input type="checkbox" id="PC" name="PC" checked={platforms.includes('PC')} onChange={(event) => setPlatforms(event.target.checked ? [...platforms, 'PC'] : platforms.filter(platform => platform !== 'PC'))} />
                                PC
                            </label>
                            <label htmlFor="PlayStation">
                                <input type="checkbox" id="PlayStation" name="PlayStation" checked={platforms.includes('PlayStation')} onChange={(event) => setPlatforms(event.target.checked ? [...platforms, 'PlayStation'] : platforms.filter(platform => platform !== 'PlayStation'))} />
                                PlayStation
                            </label>
                            <label htmlFor="Xbox">
                                <input type="checkbox" id="Xbox" name="Xbox" checked={platforms.includes('Xbox')} onChange={(event) => setPlatforms(event.target.checked ? [...platforms, 'Xbox'] : platforms.filter(platform => platform !== 'Xbox'))} />
                                Xbox
                            </label>
                            <label htmlFor="Switch">
                                <input type="checkbox" id="Switch" name="Switch" checked={platforms.includes('Switch')} onChange={(event) => setPlatforms(event.target.checked ? [...platforms, 'Switch'] : platforms.filter(platform => platform !== 'Switch'))} />
                                Switch
                            </label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="game-steam-link">
                                Game Steam Link:
                                <input type="url" id="game-steam-link" name="game-steam-link" className="input-field" value={steamLink} onChange={(event) => setSteamLink(event.target.value)} />
                            </label>
                            <p></p>
                            <label htmlFor="game-xbox-link">
                                Game Xbox Link:
                                <input type="url" id="game-xbox-link" name="game-xbox-link" className="input-field" value={xboxLink} onChange={(event) => setXboxLink(event.target.value)} />
                            </label>
                            <p></p>
                            <label htmlFor="game-playstation-link">
                                Game PlayStation Link:
                                <input type="url" id="game-playstation-link" name="game-playstation-link" className="input-field" value={playStationLink} onChange={(event) => setPlayStationLink(event.target.value)} />
                            </label>
                            <p></p>
                            <label htmlFor="game-switch-link">
                                Game Switch Link:
                                <input type="url" id="game-switch-link" name="game-switch-link" className="input-field" value={switchLink} onChange={(event) => setSwitchLink(event.target.value)} />
                            </label>
                        </fieldset>
                        <button type="submit" className="btn btn-submit">Add Game</button>
                    </form>
                </div>
            </main>
            <footer>
            </footer>
        </>
    );
    
}