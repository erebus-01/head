import React from 'react'

interface Color {
  title: string,
}

const ButtonWhiteBlack:React.FC<Color>  = ({title}) => {
  return (
    <div className="beats-button">
      <button className='beats-btn btn-light beats-btn--button beats-btn--authored font-font-secondary border_btn-white ' data-color="black" >
        <span className="beats-btn-inner text-text-primary">{title}</span>
        <span className="beats-btn-mask btn2-bg-hover-color-black"></span>
      </button>
    </div>
  )
}

export default ButtonWhiteBlack