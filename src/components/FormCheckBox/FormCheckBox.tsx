import React from 'react'
import "./FormCheckBox.scss"
export const FormCheckBox = ({ register, option }: any) => {
    return (
        <div className='checkBoxPanel'>
            <input id="checkbox" className='formCheckBox' type="checkbox" {...register(option)} />
            <label htmlFor="checkbox" className='formCheckBoxLabel'>Remember me</label>
        </div>
    )
}

export default FormCheckBox