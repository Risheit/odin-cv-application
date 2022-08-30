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
      <div className='header'>
        <h1>Info</h1>
        <button className='editInfo' onClick={handleClick}>
          Edit
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              disabled={!isEditable}
            />
          </p>
          <p>
            <label htmlFor='phone'>Phone</label>
            <input
              type='number'
              name='phone'
              id='phone'
              disabled={!isEditable}
            />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              disabled={!isEditable}
            />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              disabled={!isEditable}
            />
          </p>
        </div>
      </form>
    </section>
  );
}
