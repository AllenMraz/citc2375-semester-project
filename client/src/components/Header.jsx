export default function Header() {
    return (
    <header>
        <h1 className="page-title">Game Collection</h1>
        <nav className="navigation">
        <a href="index.html" target="_self" className="nav-link">Home</a>
        <a href="about.html" target="_self" className="nav-link">About</a>
        <a href="add.html" target="_self" className="nav-link">Add Game</a>
        </nav>
        <hr/>
  </header>
    );
}