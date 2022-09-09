import React from 'react'
import STCSS from "./SkillTag.module.css"
export const SkillTag = ({skill}) => {
  return (
    <div className={STCSS.container}>
        <p>{skill}</p>
    </div>
  )
}
