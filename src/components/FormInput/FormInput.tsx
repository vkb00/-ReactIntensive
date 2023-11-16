import { FieldErrors, UseFormRegister } from "react-hook-form"
import "./FormInput.scss"
import { useEffect, useId } from "react"
import { FormData } from "../../interfaces/FormData"
interface FormInputProps {
    register: UseFormRegister<FormData>,
    option: keyof FormData,
    label: string,
    type: string,
    errors: FieldErrors<FormData>
}
export const FormInput = ({ register, option, label, type, errors }: FormInputProps) => {
    const id = useId();
    useEffect(() => {
        console.log(option, option in errors);
    })
    const f = () => {
        console.log(errors)
    }
    return (
        <div className='formInputPanel'>
            <label onClick={f} htmlFor={id} className='formInputLabel'>{label}</label>
            <input id={id} className='formInput' type={type} {
                ...register(option, {
                    required: 'Поле обязательно для заполнения',
                    minLength: {
                        value: 8,
                        message: 'Минимальная длина: 3 символа',
                    },
                })} />
            {errors[option] && <p className="errorMessage">{errors[option]?.message}</p>}
        </div>
    )
}

export default FormInput