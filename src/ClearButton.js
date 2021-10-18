import React from 'react';

const ClearButton = ({ checkedIn, clearCheckedIn, clearItems }) => {
    const handleClick = checkedIn => {
        clearItems(checkedIn)
        clearCheckedIn()
    }
    
    return (
        checkedIn.length ?
            <button 
                className='tracking-wider mt-1 mb-4 py-2 px-3 rounded-lg w-50 text-white bg-red-500 hover:bg-red-400 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-50 active:bg-red-600 transform transition'
                onClick={() => handleClick(checkedIn)}
                >
                Clear Checked In
            </button> :
            <button className='disabled text-gray-500 shadow tracking-wider mt-1 mb-4 py-2 px-3 rounded-lg w-50'>
                Clear Checked In
            </button>
        
    )
}

export default ClearButton;