
import { useForm } from "react-hook-form"
import "./FormComponent.scss"
import FromInput from "../FormInput/FormInput";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import FormSubmit from "../FormSubmit/FormSubmit";
import { useState } from "react";
interface FormData {
    email: string,
    password: string
}
export const FormComponent = () => {
    const { register, handleSubmit } = useForm();
    const [singIn, setSignIn] = useState<Boolean>(true);
    const onSubmit = (data: any) => {

        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="switchPanel">
                <button id="signIn" onClick={() => setSignIn(true)} className="accessBtn accessBtnActive">SIGN IN</button>
                <button id="signUp" onClick={() => setSignIn(false)} className="accessBtn">SIGN UP</button>
            </div>



            <FromInput register={register} option="email" name="Email" />
            <FromInput register={register} option="password" name="Password" />
            {!singIn &&
                <FromInput register={register} option="password" name="Password" />
            }
            <FormCheckBox register={register} option="rememberMe" />
            <FormSubmit name={singIn ? "SIGN IN" : "SING UP"} />

        </form>
    )
}

export default FormComponent