import { Link } from "react-router-dom";
import Navbar from "./navbar";
export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <div className="about">
                <h1>About StudyHub</h1>
                <p className="para">A comprehensive student management system built with modern web <br /> technologies for educational institutions.</p>
            </div>
            <div className="key">
                <h2>Key Features</h2>
                <p>Everything you need to manage student information effectively </p>
            </div>

            <div className="page">
                <div className="aboutt">
                    <h2>Student Management</h2>
                    <p>Comprehensive student profile management with detailed information tracking.</p>

                </div>
                <div className="aboutt">
                    <h2>Easy Registration</h2>
                    <p>Streamlined student registration process with form validation.</p>
                </div>
                <div className="aboutt">
                    <h2>Profile Updates</h2>
                    <p>Quick and easy editing of student information and details.</p>
                </div>
                <br /><br />
                <div className="aboutt">
                    <h2>Safe Deletion</h2>
                    <p>
                        Secure student record removal with confirmation dialogs.</p>
                </div>
                <div className="aboutt">
                    <h2>Advanced Search</h2>
                    <p>
                        Powerful search and filtering capabilities across all student data.</p>
                </div>
                <div className="aboutt">
                    <h2>Data Persistence</h2>
                    <p>Reliable data storage with proper state management.</p>
                </div>
            </div>

            <div className="built">
                <h1>Built With</h1>
                <p className="para">Modern technologies and best practices</p>
                <div className="builtt">
                <button>React</button>
                <button>TypeScript</button>
                <button>React Router</button>
                <button>Context API</button>
                <button>Custom Hooks</button>
                <button>Tailwind Css</button>
                <button>Lucide Icons</button>
                <button>Form Validation</button>
                </div>
            </div>
            <div className="why">
            <div>
                <h1>Why StudyHub?</h1>
                <p>Designed with educators and administrators in mind</p>
            </div>
            <div className="fast">
            <div>
                <h2>Modern Architecture</h2>
                <p>Built with React 18, TypeScript, and modern development practices.</p>
            </div>
            <div>
                <h2>Beautiful Design</h2>
                <p>Clean, professional UI with consistent design system and animations.</p>
            </div>
            </div>
            <div className="fast">
            <div>
                <h2>Fast Performance</h2>
                <p>Optimized for speed with efficient state management and lazy loading.</p>
            </div>
            <div>
                <h2>Form Validation</h2>
                <p>Comprehensive client-side validation with user-friendly error handling.</p>
            </div>
            </div>
            </div>
            <div>
       
            </div>
        </>
    )
}