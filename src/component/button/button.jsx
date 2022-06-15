import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const { label, className, handleClick } = props;
    return (
        <div className=''>
            <button 
             className={` ${className} border border-transparent rounded-lg py-2 px-3 flex items-center justify-center font-medium  focus:outline-none `}
                onClick={handleClick}
            >
                {label}
            </ button>
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

export default Button;