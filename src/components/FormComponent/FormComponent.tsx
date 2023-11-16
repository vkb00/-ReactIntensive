
import { useForm } from "react-hook-form"
import "./FormComponent.scss"
import FromInput from "../FormInput/FormInput";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import FormSubmit from "../FormSubmit/FormSubmit";
import { useState } from "react";
import SwitchPanel from "../SwitchPanel/SwitchPanel";
interface FormData {
    email: string,
    password: string,
    rememberMe:boolean,
    confirmPassword?:string,
}
export const FormComponent = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [signIn, setSignIn] = useState<boolean>(true);
    const onSubmit = (data: FormData) => {

        console.log(data)
    }
    const handlSignIn = (value: boolean) => {
        setSignIn(value);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <SwitchPanel signIn={signIn} setSignIn={handlSignIn} />


            <FromInput register={register} option="email" name="Email" />
            <FromInput register={register} option="password" name="Password" />
            {!signIn &&
                <FromInput register={register} option="confirmPassword" name="Confirm password" />
            }
            <FormCheckBox register={register} option="rememberMe" />
            <FormSubmit name={signIn ? "SIGN IN" : "SING UP"} />

        </form>
    )
}

export default FormComponent