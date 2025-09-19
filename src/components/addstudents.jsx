
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function AddStudent() {
  const [form, setForm] = useState({ name: "", age: "",coures:"" });
  const [error, setError] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("students") || "[]");
    setStudents(existing);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleStudent = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.age || form.age < 16 || form.age > 100) newErrors.age = "Age must be between 16 and 100";
    if (!form.coures) newErrors.coures = "Course is required";
    if (!form.email) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    const existing = JSON.parse(localStorage.getItem("students") || "[]");
    existing.push({ ...form });
    localStorage.setItem("students", JSON.stringify(existing));
    setStudents(existing);
    setForm({ name: "", age: "", coures:"", email:"" });
    setError({});
  };

  return (
    <>
      <Navbar />
      <div className="forms">
        <h1 className="add">Add New Student</h1>
        <p className="paraa">Fill in the information below to register a new student</p>
        
        <form onSubmit={handleStudent}>
          <label>Full Name</label><br />
          <input className="input" type="text" name="name" value={form.name} onChange={handleChange} />
          {error.name && <p className="error">{error.name}</p>}<br /><br />

          <label>Age</label><br />
          <input className="input" type="number" name="age" value={form.age} onChange={handleChange} />
          {error.age && <p className="error">{error.age}</p>}<br /><br />

          <label>Course</label><br />
          <input className="input" type="text" name="coures" value={form.coures} onChange={handleChange} />
          {error.coures && <p className="error">{error.coures}</p>}<br /><br />

          <label>Email</label><br />
          <input className="input" type="text" name="email" value={form.email} onChange={handleChange} />
          {error.email && <p className="error">{error.email}</p>}<br /><br />

          <button type="submit" className="button" >Add Student</button>
        </form>


</div>
        <h2 className="all">All Students</h2>
        <div className="user">
  {students.length === 0 ? (
    <h3>No Students Found</h3>
  ) : (
    students.map((student, index) => (
      <div key={index} className="card">
        <h2> Name: {student.name}</h2>
        <p>Age: {student.age}</p>
        <p>{student.email}</p>
        <button>{student.coures}</button>
      </div>
    ))
  )}
</div>
    
        
        
     
    </>
  );
}