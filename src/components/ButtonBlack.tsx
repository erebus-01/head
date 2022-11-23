import React from 'react'

interface Color {
  title: string,
}

const ButtonBlack:React.FC<Color> = ({title}) => {
  return (
    <div className="beats-button">
      <button className='beats-btn btn-black beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
        <span className="beats-btn-inner">{title}</span>
        <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
      </button>
    </div>
  )
}

export default ButtonBlack