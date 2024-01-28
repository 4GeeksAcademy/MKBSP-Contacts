import React from 'react';

const PopupMessageSuccessError = ({ message, type }) => {
    const popupStyle = {
        success: {
            backgroundColor: 'lightgreen',
            color: 'green',
        },
        error: {
            backgroundColor: 'pink',
            color: 'red',
        }
    };

    return (
        <div style={{ 
            ...popupStyle[type], 
            padding: '10px',
            borderRadius: '5px',
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            width: '500px', 
            left: '50%',
            top: '50%'
        }}>

            {message}
        </div>
    );
};

export default PopupMessageSuccessError;
