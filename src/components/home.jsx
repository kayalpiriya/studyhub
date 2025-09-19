import { Link } from "react-router-dom"
import Navbar from "./navbar"
export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <p className="logo">🎓</p>
            <div className="home">
                
                <h1 className="welcome">Welcome to StudyHub</h1>
                <p className="para">Your comprehensive student management system for tracking <br></br>progress, managing courses, and building educational excellence.</p>

                {/* <Link to="/addstudents"><button className="btn">view All Students</button></Link> */}

                <Link to="/addstudents"><button className="btn">Add New Student</button></Link>

            </div>
            <div className="homee">
                <h1>Quick Actions</h1>
                <div className="study">
                    {/* <div className="stu">
                        <h2>Manage Students</h2>
                        <p>View, search, and manage all student records in one place.</p>
                        <Link to="/addstudents"><button className="butt"> View Students</button></Link>
                    </div> */}
                    <div className="stu">
                        <h2>Add New Student</h2>
                        <p>Register new students with comprehensive profile information.</p>
                        <Link to="/addstudents"><button className="butt" > Add Student</button></Link>
                    </div>
                    <div className="stu">
                        <h2>Course Analytics</h2>
                        <p>Track course enrollment and student performance metrics</p>
                        <Link to="/about"><button className="butt" >Learn More</button></Link>
                    </div>

                </div>
            </div>

        </>

    )
}