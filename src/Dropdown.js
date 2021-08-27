import React from 'react';
import { Menu } from '@headlessui/react';

const Dropdown = () => {
    return (
        <Menu as='div' className='relative inline-flex'>
            <Menu.Button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </Menu.Button>
            <Menu.Items>
                <div className='origin-top-right absolute right-0 border border-gray-300 shadow rounded w-40 p-1'>
                    <div>
                        <Menu.Item>
                            <button>Clear Checked In</button>
                        </Menu.Item>
                    </div>
                    <div>   
                        <Menu.Item>
                            <button>Clear All</button>
                        </Menu.Item>
                    </div>
                </div>
            </Menu.Items>
        </Menu>
    );
};

export default Dropdown;