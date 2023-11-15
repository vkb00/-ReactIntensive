import React from 'react'
import "./FormInput.scss"
export const FromInput = ({register, option, name}:any) => {
    return (
        <div className='formInputPanel'>
            <label className='formInputLabel'>{name}</label>
            <input className='formInput' type="text" {...register(option)} />
        </div>
    )
}

export default FromInput