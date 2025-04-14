import React, { useState } from 'react';
import './index.css';

const Student = () => {
  const students = [
    { id: 1, name: "Harry Patel", course: "React JS" },
    { id: 2, name: "Avii Shah", course: "HTML" },
    { id: 3, name: "Rohan Mehta", course: "CSS" },
    { id: 4, name: "Priya Singh", course: "Bootstrap" },
    { id: 5, name: "Ishaan Desai", course: "React JS" },
    { id: 6, name: "Tanvi Joshi", course: "CSS" },
    { id: 7, name: "Kunal Rao", course: "HTML" },
    { id: 8, name: "Meera Trivedi", course: "Bootstrap" },
    { id: 9, name: "Aryan Shah", course: "React JS" },
    { id: 10, name: "Sneha Bhatt", course: "CSS" },
    { id: 11, name: "Yash Modi", course: "HTML" },
    { id: 12, name: "Kavya Rathi", course: "Bootstrap" },
    { id: 13, name: "Dev Chauhan", course: "React JS" },
    { id: 14, name: "Pooja Verma", course: "CSS" },
    { id: 15, name: "Siddharth Soni", course: "HTML" },
    { id: 16, name: "Anaya Pandey", course: "Bootstrap" },
    { id: 17, name: "Manav Solanki", course: "React JS" },
    { id: 18, name: "Dhruvi Mehta", course: "CSS" },
    { id: 19, name: "Ritika Jain", course: "HTML" },
    { id: 20, name: "Nirav Gohil", course: "Bootstrap" },
    { id: 21, name: "Avni Vyas", course: "React JS" },
    { id: 22, name: "Harshil Patel", course: "CSS" },
    { id: 23, name: "Jiya Sheth", course: "HTML" },
    { id: 24, name: "Parth Bhatt", course: "Bootstrap" },
    { id: 25, name: "Krisha Desai", course: "React JS" },
    { id: 26, name: "Tanishq Kapoor", course: "CSS" },
    { id: 27, name: "Neha Rawal", course: "HTML" },
    { id: 28, name: "Raj Solanki", course: "Bootstrap" },
    { id: 29, name: "Simran Kaur", course: "React JS" },
    { id: 30, name: "Veer Nanda", course: "CSS" }
  ];

  const [id, setId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const idSearchResult = students.find(student => student.id === Number(id));

  const courseColors = {
    "React JS": "#52787c",
    "HTML": "#f4a261",
    "CSS": "#2a9d8f",
    "Bootstrap": "#9c89b8"
  };

  const display = students.filter(student => {
    if (id) {
      return student.id === Number(id);
    }
    if (selectedCourse) {
      return student.course === selectedCourse;
    }
    return true;
  });

  return (
    <div className="container">
      <h2 className="title">Students Details</h2>

      <input  type="number"
        placeholder="Enter Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <select
        value={selectedCourse}
        onChange={(e) => {
          setSelectedCourse(e.target.value);
          setId(""); 
        }}
      >
        <option value="">-- Filter By Course --</option>
        <option value="React JS">React JS</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Bootstrap">Bootstrap</option>
      </select>

      <button onClick={() => {
        setId("");
        setSelectedCourse("");
      }}>Reset</button>

      <div className="card">
        {display.map((student) => (
          <div
            className="student-card"
            key={student.id}
            style={{
              backgroundColor:
                selectedCourse
                  ? courseColors[student.course] || 'pink'
                  : 'pink'
            }}
          >
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
