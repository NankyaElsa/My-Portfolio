 
 import React from 'react';

 import image from "../images/forest.jpg";

const imageAltText = "black confident girl";



  const skillsList = [
    "Makerere University, Kampala, Uganda. Course: Bachelor of Science in Software Engineering. Year: 2021-todate",
    "High School: Central College Mityana, Mityana, Uganda. Year: 2015-2020"
    ];

 const Education = () => {
    return (
      <section className="padding" id="about">
        <img className="background" src={image} alt={imageAltText} />
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "4rem",
            margin: "3rem auto",
            textAlign: "left",
          }}
        >
          <h2>About my Education</h2>
          <hr />
          <ul
            style={{
              textAlign: "left",
              columns: 1,
              fontSize: "1.25rem",
              margin: "2rem 3rem",
              gap: "3rem",
            }}
          >
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <hr />
          
        </div>
      </section>
    );
  };
export default Education;
 
// Now, we will create the  Experience  component. 
 // Path: src/Components/Experience.jsx
 
 