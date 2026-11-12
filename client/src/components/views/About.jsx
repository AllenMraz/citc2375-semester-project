import Header from '../Header.jsx';
import Table from '../Table.jsx';
import { getCountByPlatform } from '../../data.js';




export default function About({ gameItems }) {
    const PcCount = getCountByPlatform('PC', gameItems);
    const PlayStationCount = getCountByPlatform('PlayStation', gameItems);
    const XboxCount = getCountByPlatform('Xbox', gameItems);
    const NintendoCount = getCountByPlatform('Nintendo', gameItems);
    return (
        <>
            <Header />
            <main>
                <p class="page-description font-bold">This is the about page of my game collection.</p>
                <hr />
                <h2 class="section-title">About</h2>
                <p class="section-description">
                    This is a aplication that was created to display some games I own in a clean format.
                    This could be usfal for someone my be intrested in a game that I own and want to know more about it.
                    The application will display the name of the game, the genre, the platform, and a short description of the game.
                </p>
                <Table
                    PCCount={PcCount}
                    PlayStationCount={PlayStationCount}
                    XboxCount={XboxCount}
                    NintendoCount={NintendoCount}
                />
            </main>

        </>
    );
}