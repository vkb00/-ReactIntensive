import { FieldErrors, UseFormRegister, useFormContext } from "react-hook-form"
import "./FormInput.scss"
import { useId } from "react"
import { FormData } from "../../interfaces/FormData"
import { setValidation } from "../../validationSettings/setFromValidationSettings"

interface FormInputProps {
    register: UseFormRegister<FormData>,
    option: keyof FormData,
    label: string,
    type: string,
    errors: FieldErrors<FormData>
}

export const FormInput = ({ register, option, label, type, errors }: FormInputProps) => {
    const id = useId();
    const { getValues } = useFormContext();

    return (
        <div className='formInputPanel'>
            <label htmlFor={id} className='formInputLabel'>{label}</label>
            <input id={id} className='formInput' type={type} {
                ...register(option, setValidation(option, getValues))} />
            {errors[option] && <p className="errorMessage">{errors[option]?.message}</p>}
        </div>
    )
}

export default FormInput