import React from 'react'
import "./FormSubmit.scss"
import { useFormContext } from 'react-hook-form';
interface PropsFormSubmit {
    name: string;
}
export const FormSubmit = ({ name }: PropsFormSubmit) => {
    const { formState } = useFormContext();
    return (
        <button disabled={formState.isSubmitted} className='submitBtn' type="submit">{name}</button>
    )
}

export default FormSubmit