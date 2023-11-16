import React from 'react'
import "./FormCheckBox.scss"
import { UseFormRegister } from 'react-hook-form'
import { FormData } from "../../interfaces/FormData"
interface FormCheckBoxProps {
    register: UseFormRegister<FormData>,
    option: keyof FormData,
}
export const FormCheckBox = ({ register, option }: FormCheckBoxProps) => {
    return (
        <div className='checkBoxPanel'>
            <input id="checkbox" className='formCheckBox' type="checkbox" {...register(option)} />
            <label htmlFor="checkbox" className='formCheckBoxLabel'>Remember me</label>
        </div>
    )
}

export default FormCheckBox