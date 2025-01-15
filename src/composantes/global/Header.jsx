import Navigation from "./Navigation";

function Header() {
    const user = null;

    return (
        <header>
            <h1>My App</h1>
            <Navigation />
            {user ? <button>Logout</button> : <button>Login</button>}
        </header>
    );
}

export default Header;
