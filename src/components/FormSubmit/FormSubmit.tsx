import React from 'react'
import "./FormSubmit.scss"
interface PropsFormSubmit {
    name: string;
    isSubmitedForm: boolean;
}
export const FormSubmit = ({ name, isSubmitedForm }: PropsFormSubmit) => {
   
    return (
        <button disabled={isSubmitedForm} className='submitBtn' type="submit">{name}</button>
    )
}

export default FormSubmit