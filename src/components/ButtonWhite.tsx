import React from 'react'

interface Color {
  title: string,
}

const ButtonWhite:React.FC<Color> = ({title}) => {
  return (
    <div className="beats-button">
      <button className='beats-btn btn-light beats-btn--button beats-btn--authored font-font-secondary' data-color="light" >
        <span className="beats-btn-inner">{title}</span>
        <span className="beats-btn-mask btn2-bg-hover-color-red"></span>
      </button>
    </div>
  )
}

export default ButtonWhite