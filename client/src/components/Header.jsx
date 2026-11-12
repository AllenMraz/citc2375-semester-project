
import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1 className="page-title">Game Collection</h1>

            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/add" className="nav-link">Add Game</Link>
            </nav>
            <hr />
        </header>
    );
}