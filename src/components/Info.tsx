import React, { FormEvent, SyntheticEvent, useState } from 'react';
import '../styles/Components.css';
// import parsePhoneNumber, { PhoneNumber } from 'libphonenumber-js';

export default function Info() {
  const [isEditable, setIsEditable] = useState(false);

  const handleClick = (e: SyntheticEvent) => setIsEditable(!isEditable);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsEditable(false);
  };

  return (
    <section className='Component' id='Info'>
      <div className='Header'>
        <h1>Info</h1>
        <button className='EditInfo' onClick={handleClick}>
          Edit
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label htmlFor='Name'>Name</label>
            <input
              type='text'
              name='Name'
              id='Name'
              disabled={!isEditable}
            />
          </p>
          <p>
            <label htmlFor='Phone'>Phone</label>
            <input
              type='number'
              name='Phone'
              id='Phone'
              disabled={!isEditable}
            />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor='Address'>Address</label>
            <input
              type='text'
              name='Address'
              id='Address'
              disabled={!isEditable}
            />
          </p>
          <p>
            <label htmlFor='Email'>Email</label>
            <input
              type='email'
              name='Email'
              id='Email'
              disabled={!isEditable}
            />
          </p>
        </div>
      </form>
    </section>
  );
}
