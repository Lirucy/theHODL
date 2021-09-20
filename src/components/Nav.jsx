import { Link } from "react-router-dom"

 function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/new">New/Add Character</Link>
        </nav>
    )

}

export default Nav;