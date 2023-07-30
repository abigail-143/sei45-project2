import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <small>© Abigail, {year}</small>
        </div>
    );
};

export default Footer;