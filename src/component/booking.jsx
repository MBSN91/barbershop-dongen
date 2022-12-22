import React, { useState } from 'react';

import fetch from 'isomorphic-unfetch';

//importeren van keys die niet zichtbaar mogen zijn
import dotenv from 'dotenv';
dotenv.config();

 //variabelen waar de keys gesetworden
 const username = process.env.SECRET_YOUCANBOOKME_USERNAME;
 const password = process.env.SECRET_YOUCANBOOKME_PASSWORD;
 const profileid = proces.env.SECRET_YOUCANBOOKME_PROFILE_ID;
 const appointmentid = proces.env.SECRET_YOUCANBOOKME_BOOK_BAARD ;

 //converteren van de strings naar whatever it is
 const authString = `${username}:${password}`;
 const authStringBase64 = Buffer.from(authString).toString('base64');


export default function booking() {      
        //form data
        const [formData, setFormData] = useState({
          profileId: `${profileid}`,
          appointmentTypesIds: `${appointmentid}` ,
          units: 1,
          startsAt:'',
          timeZone:'Europe/Amsterdam',
          answers: [
            {
              code:'EMAIL',
              string: ''
            },
            {
              code:'FNAME',
              string: ''
            },
            {
              code:'Q5',
              string: ''
            }
          ]
        })

        const [error, setError] = useState('')

        const handleChange = (event) => {
           setFormData({...formData,
              [event.target.name]: event.target.value,
           })
        }

        // what should happen when submitting the form
        const handleSubmit = (event) => {
          event.preventDefault();
        
              // Send POST request to youcanbook.me API to create booking
              fetch('https://api.youcanbook.me/v1/bookings', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json', 
                    Authorization: `Basic ${authStringBase64}`
                  },
                  body: JSON.stringify({
                    startAt: formData.startsAt,
                    email: formData.answers,
                    name: formData.answers,
                    phone: formData.answers,
                  }), 
              })

              .then((response) => response.json())
              .then((data) => {
              // Booking successfully created
              console.log(data);
              })
              .catch((error) => {
                // Error occurred when creating booking
                setError(error);
              });
          }
      
  return (
      <form className='relative mt-8 mb-8 flex flex-col justify-center align-middle items-center w-full' onSubmit={handleSubmit}>
            <div className='flex flex-row items-center space-x-4'>
                <label htmlFor="date">Date:</label>
                <input
                  className='px-2 py-2 border-primary border'
                  type="datetime-local"
                  name='startDate'
                  onChange={handleChange}
                  min='2022-12-20T02:00'
                  max='2023-12-20T02:00'
                  step='900'
                  required
                />
            </div>

            <br />
            
            <div className='flex flex-row items-center space-x-4'>
            <label htmlFor="name">Name:</label>
            <input
              className='px-2 py-2 border-primary border'
              type="text"
              name='name'
              onChange={handleChange}
              required
            />
            </div>

            <br />
            
            <div className='flex flex-row items-center space-x-4'>
            <label htmlFor="email">Email:</label>
            <input
              className='px-2 py-2 border-primary border'
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            </div>

            <br />
            <div className='flex flex-row items-center space-x-4'>
            <label htmlFor="phone">Phone:</label>
            <input
              className='px-2 py-2 border-primary border'
              type="tel"
              name="Q5"
              onChange={handleChange}
              required
            />
            </div>
            <br />
            <button className='z-10 bg-primary px-4 py-2 font-body text-base text-white rounded-sm' type="submit">Create booking</button>
          </form>
      )
  }


