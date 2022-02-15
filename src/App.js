import React, { useState } from 'react';

import { sampleData } from './sampleData';
import Form from './Form';
import Queue from './Queue';
import InstructionsModal from './InstructionsModal';
import dogLogo from './images/dog-logo.svg'
import catLogo from './images/cat-logo.svg'

import { v4 as uuid } from "uuid";

const App = () => {
  const [items, setItems] = useState(sampleData);

  const addItem = item => {
    const newItem = {...item, id: uuid()}
    setItems(items => [...items, newItem])
  };

  const clearItems = checkedIn => {
    setItems(items => items.filter(i => !checkedIn.includes(i.id)))
  }

  return (
    <div className="w-full">
      <div className='max-w-md mx-auto'>
        <div className='flex justify-between mt-8 mb-4'>
          <img src={dogLogo} alt='dog-logo' className='w-10 ml-2'/>
          <h1 className='inline text-5xl font-bold text-center'>Vet<span className='text-green-500'>Wait</span></h1>
          <img src={catLogo} alt='cat-logo' className='w-10 mr-2'/>
        </div>
        <InstructionsModal />
      </div>
      <div className='mx-auto max-w-lg'>
        <Form addItem={addItem}/>
      </div>
      <div className='my-10' />
      <div className='mx-auto max-w-5xl'>
        <Queue items={items} clearItems={clearItems}/>
      </div>
    </div>
  );
}

export default App;
