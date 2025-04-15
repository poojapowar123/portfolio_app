import React from 'react';
import skills from "./data/skills.json"

const Skills = () => {
  return (
    <div className='container skills'>
      <h2>Skills</h2>
      <div className='items' >
        {skills.map((data) =>
          <>

            <div className="item" key={data.id}>
              <img src={`/assets/${data.imageSrc}`} alt="" />
              <h4>{data.title}</h4>
            </div>

          </>
        )}
      </div>
    </div>
  )
}

export default Skills
