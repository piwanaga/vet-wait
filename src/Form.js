import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const Form = ({ addItem }) => {
    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        petName: '',
        phone: '',
        firstNameError: '',
        lastNameError: '',
        petNameError: '',
        phoneError: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const validateForm = () => {
      let validForm = true
      if (!formData.firstName) {
        setFormData(data => ({
          ...data, firstNameError: 'First name cannot be blank'
        }))
        validForm = false
      } else {
        setFormData(data => ({
          ...data, firstNameError: ''
        }))
      }
      if (!formData.lastName) {
        setFormData(data => ({
          ...data, lastNameError: 'Last name cannot be blank'
        }))
        validForm = false
      } else {
        setFormData(data => ({
          ...data, lastNameError: ''
        }))
      }
      if (!formData.petName) {
        setFormData(data => ({
          ...data, petNameError: 'Pet name cannot be blank'
        }))
        validForm = false
      } else {
        setFormData(data => ({
          ...data, petNameError: ''
        }))
      }
      if (!formData.phone) {
        setFormData(data => ({
          ...data, phoneError: 'Phone cannot be blank'
        }))
        validForm = false
      } else if ( formData.phone.length !== 12) {
        setFormData(data => ({
          ...data, phoneError: 'Invalid phone number'
        }))
        validForm = false
      } else {
        setFormData(data => ({
          ...data, phoneError: ''
        }))
      }
      return validForm
    };

    const handleSubmit = evt => {
        evt.preventDefault()
        let isValidForm = validateForm()
        if (isValidForm) {
          addItem({
            firstName: formData.firstName,
            lastName: formData.lastName,
            petName: formData.petName,
            phone: formData.phone,
          })
          setFormData(INITIAL_STATE)
        }
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }));
      };

    return (
      <div className='py-8 px-10 shadow-lg rounded-lg bg-white'>
        <form onSubmit={handleSubmit} className=''>
          <div className='mb-3'>
            <label htmlFor='first-name' className='block text-sm text-gray-700 mb-1'>First Name</label>
            <input 
                type='text' 
                name='firstName' 
                id='firstName'
                maxLength='25' 
                value={formData.firstName}
                onChange={handleChange}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50' />
            {formData.firstNameError ? 
                <p className='text-xs text-red-500 mt-1'>{formData.firstNameError}</p> :
                null
            }
          </div>
          <div className='mb-3'>
            <label htmlFor='last-name' className='block text-sm text-gray-700 mb-1'>Last Name</label>
            <input 
                type='text' 
                name='lastName' 
                id='lastName'
                maxLength='25' 
                value={formData.lastName}
                onChange={handleChange}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50' />
            {formData.lastNameError ? 
                <p className='text-xs text-red-500 mt-1'>{formData.lastNameError}</p> :
                null
            }
          </div>
          <div className='mb-3'>
            <label htmlFor='petName' className='block text-sm text-gray-700 mb-1'>Pet Name</label>
            <input 
                type='text' 
                name='petName' 
                id='petName'
                maxLength='25' 
                value={formData.petName}
                onChange={handleChange}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50' />
            {formData.petNameError ? 
                <p className='text-xs text-red-500 mt-1'>{formData.petNameError}</p> :
                null
            }
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='block text-sm text-gray-700 mb-1'>Phone Number</label>
            <InputMask
                mask='999-999-9999' 
                maskChar=''
                type='text' 
                name='phone' 
                id='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-500 focus:ring-opacity-50' />
            {formData.phoneError ? 
                <p className='text-xs text-red-500 mt-1'>{formData.phoneError}</p> :
                null
            }
          </div>
          <div>
            <button
                className='text-md text-white uppercase tracking-wider bg-green-500 mt-4 py-3 rounded-lg w-full hover:bg-green-400 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50 active:bg-green-600 transform transition' >
                    Add to queue
            </button>
          </div>
        </form>
      </div>
    );
};

export default Form;