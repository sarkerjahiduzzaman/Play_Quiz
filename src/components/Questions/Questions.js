import React, { useState } from 'react';
import Redioinput from '../RedioInput/Redioinput';
import {EyeIcon } from '@heroicons/react/24/solid'
import './Quiestion.css'
import Answare from '../Answare/Answare';

const Questions = ({question}) => {
    const [open,setOpen]=useState(false)
    const openFunction=(id) =>{
        return id
    }
    
    console.log({question})
    return (
        <div>
          <div className=' bg-slate-200 mb-9 mt-7 w-2/3 inline-block rounded-md p-10'>
            <div className='Header'>
            <h2 className='text-3xl font-semibold mb-5'>{question.question}</h2>
            <div onClick={()=>setOpen (!open)}><EyeIcon  className="h-6 w-6 text-black-500"/>
            {
                open ? <h1>{question.correctAnswer}</h1> : undefined
            }
            </div>

            </div>
            <div className='text-left stayle-quiz'>
                {
                 question.options.map(ans=><Redioinput key={question.id} ans={ans}></Redioinput>)
                }
             
            </div>
          
            </div> 
        </div>
    );
};

export default Questions;

