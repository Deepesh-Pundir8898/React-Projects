import React from 'react'

export const EducationPlanner = ({ subjects, updateHours , deleteData}) => {
  return (
      <table border={1}>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Study Hours</th>
            <th>Adjust Hours</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.hours}</td>
              <td >
                <button className='decrement-hour' onClick={() => updateHours(index, -1)}>-</button>
                <button className='increment-hour' onClick={() => updateHours(index, 1)}>+</button>
                <button className='delete' onClick={()=> deleteData(index) }>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
