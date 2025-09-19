import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="main-navbar">
            <h2 className="studyhub">🎓StudyHub</h2>

            <ul>

                <li><Link to="/home">🏠Home</Link> </li>
                <li><Link to="/addstudents">👤Add Sudents</Link></li>
                <li><Link to="/about">ℹ️About</Link></li>
            </ul>

        </nav>
    )
}