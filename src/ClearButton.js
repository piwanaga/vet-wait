import React from 'react';

const ClearButton = ({ checkedIn, clearItems }) => {
    const handleClick = checkedIn => {
        clearItems(checkedIn)
    }
    console.log(checkedIn)
    return (
        <button 
            className='text-md text-gray-500 uppercase tracking-wider mt-1 mb-4 py-3 rounded-lg w-full hover:bg-red-500 hover:text-white hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 focus:ring-opacity-50 active:bg-red-600 transform transition'
            onClick={() => handleClick(checkedIn)}
        >
            Clear Checked In
        </button>
    )
}

export default ClearButton;