// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./navbar";

// export default function Student() {
//     const [students, setStudents] = useState([]);
  


//     // localStorage la irundhu data load pannudhu
//     useEffect(() => {
//         const existing = JSON.parse(localStorage.getItem("students") || "[]");
//         setStudents(existing);
//     }, []);

//     const saveToStorage = (list) => {
//         setStudents(list);
//         localStorage.setItem("students", JSON.stringify(list));
//       };

//       const handleDelete = (index) => {
//         const updated = students.filter((_, i) => i !== index);
//         saveToStorage(updated);
//       };

//       const handleEdit = (index) => {
//         setEditingIndex(index);
//         setFormData(students[index]);
//       };

    

//     return (
//         <>
//             <Navbar></Navbar>
//             <div>
//                 <div >
//                     <h1 className="directory" >Student Directory</h1>
//                     <Link to="/addstudents"><button className="new" >Add New Student</button></Link>

//                 </div>
//                 <br />
//                 <div>
//                     <input className="search" type="text" placeholder="search by or coures...." />

//                 </div>
//                 <br /><br />
//                 <div className="user">
//                     {students.length === 0 ? (
//                         <h3>No Students Found</h3>
//                     ) : (
//                         students.map((student, index) => (
//                             <div key={index} className="card">




//                                 <h2>{student.name}</h2>
//                                 <p> Age {student.age}</p>
//                                 <p>{student.email}</p>
//                                 <button>{student.coures}</button>

//                                 <br /><br />
//                                 <div className="btnn">
//                                 <button className="edit" onClick={() => handleEdit(index)} >Edit</button>
//                                 <button className="delete"onClick={() => handleDelete(index)}> Delete </button>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>

//             </div>

//         </>
//     )
// }