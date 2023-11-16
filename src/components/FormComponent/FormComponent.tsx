
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import FormSubmit from "../FormSubmit/FormSubmit";
import SwitchPanel from "../SwitchPanel/SwitchPanel";
import "./FormComponent.scss";
import { FormData } from "../../interfaces/FormData"

export const FormComponent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [signIn, setSignIn] = useState<boolean>(true);

    const onSubmit = (data: FormData) => {
        console.log(data);

    }
    const handlReset = () => {
        reset();
    }
    const handlSignIn = (value: boolean) => {
        setSignIn(value);
        handlReset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <SwitchPanel signIn={signIn} setSignIn={handlSignIn} />
            <FormInput register={register} option="email" label="Email" type="email" errors={errors} />
            <FormInput register={register} option="password" label="Password" type="password" errors={errors} />
            {!signIn &&
                <FormInput register={register} option="confirmPassword" label="Confirm password" type="password" errors={errors} />
            }
            <FormCheckBox register={register} option="rememberMe" />
            <FormSubmit name={signIn ? "SIGN IN" : "SING UP"} />

        </form>
    )
}

export default FormComponent