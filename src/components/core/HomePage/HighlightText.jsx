import React from 'react'

const HighlightText = ({text,color}) => {
  return (
    <span className= {` ${color}`} >
      {/* text-gradient code in index.css */}
        {" "}
        {text}
    </span>
  )
}

export default HighlightText
