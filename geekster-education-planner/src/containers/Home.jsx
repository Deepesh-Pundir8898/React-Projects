import React, { useState, useEffect } from 'react';
import { EducationPlanner } from '../components/EducationPlanner';
import { EducationPlannerForm } from '../components/EducationPlannerForm';
import "./Home.css"

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true); 

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
    setIsInitialLoad(false); 
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem('subjects', JSON.stringify(subjects));
    }
  }, [subjects, isInitialLoad]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const updateHours = (index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index].hours = Number(newSubjects[index].hours) + value;

    if (newSubjects[index].hours < 0) {
      newSubjects[index].hours = 0;
    }

    setSubjects(newSubjects);
  };

  return (
    <>
      <div className="container">
        <h1>Geekster Education Planner</h1>
        <EducationPlannerForm addSubject={addSubject} />
        <EducationPlanner subjects={subjects} updateHours={updateHours} />
      </div>
    </>
  );
};

export default Home;
