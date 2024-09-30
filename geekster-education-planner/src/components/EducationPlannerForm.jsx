import React from 'react'
import { useState } from 'react';

export const EducationPlannerForm = ({ addSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [hours, setHours] = useState(1);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjectName.trim() === '') return;

    addSubject({ name: subjectName, hours });
    setSubjectName('');
    setHours(1);
  };

  return (
    <div className="edu-planner-form">
        <form action="" onSubmit={handleSubmit}>
          <div className='subject-input'>
            <label htmlFor="subject">Subject Name : </label>
            <input type="text" name="" id="subject" value={subjectName} onChange={(e)=>{
              setSubjectName(e.target.value);
            }} required />
          </div>
          <div className='hours-input'>
            <label htmlFor="hours">Study hours : </label>
            <input type="number" value={hours} min={1} onChange={(e)=>{
              setHours(e.target.value);
            }} required/>
          </div>
          <button>Add Subject</button>
        </form>
    </div>
  )
}
