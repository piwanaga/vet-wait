import React, { useState } from 'react';
import ClearButton from './ClearButton';
import sendText from './API';

const Queue = ({ items, clearItems }) => {
    const [textSent, setTextSent] = useState([])
    const [checkedIn, setCheckedIn] = useState([])

    const handleSendText = async (phone, ownerName, petName, id) => {
        await sendText(phone, ownerName, petName)
        setTextSent(textSent => [...textSent, id])
    }

    const handleCheckIn = id => {
        setCheckedIn(checkedIn => [...checkedIn, id])
    }

    const renderTextBtn = i => {
        return textSent.includes(i.id) ? 
            <button
                disabled
                className= 'disabled text-blue-400 text-xs tracking-wider bg-blue-200 bg-opacity-20 px-2 py-1 sm:ml-4 md:ml-8 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50 transform transition' 
                > 
                text sent
                <span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            </button> :
            <button
                className= 'text-white bg-blue-400 text-xs tracking-wider px-2 py-1 sm:ml-4 md:ml-8 rounded-lg border hover:bg-blue-300  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-500 transform transition'
                onClick={() => handleSendText(i.phone, i.ownerName, i.petName, i.id)}
                > 
                Send Text
            </button>
        
    }

    const renderCheckInBtn = id => {
        return checkedIn.includes(id) ? 
            <button
                disabled
                className= 'disabled text-green-500 text-xs tracking-wider bg-green-300 bg-opacity-20 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-200 focus:ring-opacity-50  transform transition' 
                > 
                checked in
                <span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            </button> :
            <button
                className= 'text-white bg-green-400 text-xs tracking-wider bg-white px-2 py-1 rounded-lg border  hover:bg-green-300  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-400 focus:ring-opacity-50 active:bg-green-500 transform transition'
                onClick={() => handleCheckIn(id)}
                > 
                Check In
            </button>
    }

    return (
        <>
        <div className='bg-white shadow-lg rounded-lg'>
            <table className='table-fixed w-full border-collapse'>
                <thead className='bg-gray-100'>
                    <tr className='border-b'>
                        <th className='hidden sm:table-cell w-12 md:w-20 lg:w-16 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900'>Pos</th>
                        <th className='w-20 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900'>Owner</th>
                        <th className='w-16 lg:w-20 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900'>Pet</th>
                        <th className='sm:w-36 md:w-40 lg:w-28 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900'>Phone</th>
                        <th className='sm:w-32 md:w-28 text-left text-sm sm:text-lg font-semibold px-4 py-4 tracking-wide text-gray-900'>
                            Checked In
                        </th>
                    </tr>
                </thead>
                <tbody>
                {items.map((i, idx) => (
                    <tr key={i.id} className='hover:bg-gray-50'>
                        <td className='hidden sm:table-cell border px-3 py-3 text-gray-900 text-xs sm:text-sm'>{idx + 1}</td>
                        <td className='border px-3 py-3 text-gray-900 text-xs sm:text-sm overflow-auto'>{i.firstName} {i.lastName}</td>
                        <td className='border px-3 py-3 text-gray-900 text-xs sm:text-sm overflow-auto'>{i.petName}</td>
                        <td className='border px-3 py-3 text-gray-900 text-xs sm:text-sm text-center sm:text-left'>
                            {i.phone}
                            {renderTextBtn(i)}
                        </td>
                        <td className='border-b px-3 py-3'>
                            <div className='flex justify-center items-center'>
                            {renderCheckInBtn(i.id)}
                            </div>
                        </td>
                    </tr> 
                ))}
                </tbody>
            </table>
            {items.length ? null :
            <div className='flex justify-center w-full px-3 py-5'>
                <p className='text-gray-900 text-xl italic font-light'>Woof! No one is waiting.</p>
            </div>
            }
        </div>
        {items.length ? 
            <ClearButton checkedIn={checkedIn} clearItems={clearItems}/> :
            null
        }
        </>
    );
};

export default Queue;