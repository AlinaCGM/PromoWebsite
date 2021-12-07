
import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type, 
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
   <>
    <Link to='/#contactus' className='btns'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >   <p className="p-btn"> button 1 </p>
        {children}
      </button>
    </Link>
    {/* <Link to='/#galery' className='btns1'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      ><p className="p-btn">button 2</p>
        {children}
      </button>
    </Link> */}
    </>
    
  );
};


