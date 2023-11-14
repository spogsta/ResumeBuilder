import { FC } from 'react';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [numExperiences, setNumExperiences] = useState(1);

  const addExperience = () => {
    //logic for adding another work experience.
    setNumExperiences(numExperiences + 1);
  };

  const experiences = []; //this holds all the experiences/workex experience.
  for (let i = 0; i < numExperiences; i++) {
    experiences.push(<Experience key={i} />);
  }

  return (
    <div>
      <Person />
      <Education />
      <h1> Experience</h1>
      <hr />
      {experiences}
      <button onClick={addExperience}>more jobs</button>
    </div>
  );
};

function Person() {
  const [person, setPerson] = useState({
    fName: 'John',
    lName: 'Peterson',
    phone: '123-456-7890',
    email: 'johnpeterson1@gmail.com',
  });

  const handleFieldChange = (fieldName, value) => {
    setPerson({ ...person, [fieldName]: value });
  };

  const [inputVisibility, setInputVisibility] = useState(true); // State to control input visibility
  const toggleInputVisibility = () => {
    setInputVisibility(!inputVisibility);
  };

  return (
    <>
      <h1 className="personName">
        {person.fName} {person.lName}
      </h1>
      <h2 className="personStuff">
        {person.email} {person.phone}
      </h2>
      <hr />
      {inputVisibility && (
        <>
          <CustomInput //creating input fields to ad personal info to the above header elemen
            label="First Name"
            value={person.fName}
            onChange={(value) => handleFieldChange('fName', value)}
          />
          <CustomInput
            label="Last Name"
            value={person.lName}
            onChange={(value) => handleFieldChange('lName', value)}
          />
          <CustomInput
            label="Phone"
            value={person.phone}
            onChange={(value) => handleFieldChange('phone', value)}
          />
          <CustomInput
            label="Email"
            value={person.email}
            onChange={(value) => handleFieldChange('email', value)}
          />
        </>
      )}

      <button onClick={toggleInputVisibility}>
        {' '}
        {/*This creates a button that hides the input fields and changes the button to a + */}
        {inputVisibility ? 'Hide Inputs' : '+'}
      </button>
    </>
  );
}

function Education() {
  const [education, setEducation] = useState({
    name: 'NDSU',
    title: 'B.A. Psychology',
    date: '10/1/2069-10/1/2070',
  });

  const handleFieldChange = (fieldName, value) => {
    setEducation({ ...education, [fieldName]: value });
  };

  const [inputVisibility, setInputVisibility] = useState(true); // State to control input visibility
  const toggleInputVisibility = () => {
    setInputVisibility(!inputVisibility);
  };

  return (
    <>
      <h1>Education</h1>
      <hr />
      <h1>{education.name}</h1>
      <h2>{education.title}</h2>
      <h4>{education.date}</h4>

      {inputVisibility && (
        <>
          <CustomInput //creating input fields to ad education to the above header elements
            label="School Name"
            value={education.name}
            onChange={(value) => handleFieldChange('name', value)}
          />
          <CustomInput
            label="Degree Title"
            value={education.title}
            onChange={(value) => handleFieldChange('title', value)}
          />
          <CustomInput
            label="Dates of attendence"
            value={education.date}
            onChange={(value) => handleFieldChange('date', value)}
          />
        </>
      )}
      <button onClick={toggleInputVisibility}>
        {' '}
        {/*This creates a button that hides the input fields and changes the button to a + */}
        {inputVisibility ? 'Hide Inputs' : '+'}
      </button>
    </>
  );
}

function Experience() {
  const [experience, setExperience] = useState({
    name: 'GarbageTownUSA',
    title: 'King',
    responsibilities: 'commanding the peasants to clean the garbage.',
    date: '10/1/2069-01/01/2099',
  });

  const handleFieldChange = (fieldName, value) => {
    setExperience({ ...experience, [fieldName]: value });
  };

  const [inputVisibility, setInputVisibility] = useState(true); // State to control input visibility
  const toggleInputVisibility = () => {
    setInputVisibility(!inputVisibility);
  };

  return (
    <>
      <h1>{experience.name}</h1>
      <h1>{experience.title}</h1>
      <h4>{experience.date}</h4>
      <p>{experience.responsibilities}</p>
      {inputVisibility && (
        <>
          <CustomInput //adding input fields for the current position.
            label="Company Name"
            value={experience.name}
            onChange={(value) => handleFieldChange('name', value)}
          />
          <CustomInput
            label="Position title"
            value={experience.title}
            onChange={(value) => handleFieldChange('title', value)}
          />
          <CustomInput
            label="Date Employed"
            value={experience.date}
            onChange={(value) => handleFieldChange('date', value)}
          />
          <div
            className="responsibilities" // Adding the class name here
          >
            <CustomInput
              label="Responsibilities"
              value={experience.responsibilities}
              onChange={(value) => handleFieldChange('responsibilities', value)}
            />
          </div>
        </>
      )}
      <button onClick={toggleInputVisibility}>
        {' '}
        {/*This creates a button that hides the input fields and changes the button to a + */}
        {inputVisibility ? 'Hide Inputs' : '+'}
      </button>
    </>
  );
}

function CustomInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
