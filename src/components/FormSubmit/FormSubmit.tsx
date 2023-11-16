import React from 'react'
import "./FormSubmit.scss"
interface PropsFormSubmit {
    name: string;
}
export const FormSubmit = ({ name }: PropsFormSubmit) => {
    return (
        <button className='submitBtn' type="submit">{name}</button>
    )
}

export default FormSubmit