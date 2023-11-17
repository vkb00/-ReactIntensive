
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormCheckBox from "../FormCheckBox/FormCheckBox";
import FormSubmit from "../FormSubmit/FormSubmit";
import SwitchPanel from "../SwitchPanel/SwitchPanel";
import "./FormComponent.scss";
import { FormData } from "../../interfaces/FormData"

const fetchRequestToAuth = async (url: string, formData: FormData) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json();
}

export const FormComponent = () => {
    const methods = useForm<FormData>();
    const [signIn, setSignIn] = useState<boolean>(true);
    const signInUrl = "https://63846cc83fa7acb14ff406a3.mockapi.io/signIn";
    const signUpUrl = "https://63846cc83fa7acb14ff406a3.mockapi.io/signUp";

    const onSubmit = async (formData: FormData) => {
        if (signIn) {
            const data = await fetchRequestToAuth(signInUrl, formData);
            alert("Вы авторизованы!"+JSON.stringify(data));
        }
        else {
            const data = await fetchRequestToAuth(signUpUrl, formData);
            alert("Вы зарегестрированы!"+JSON.stringify(data));
        }

    }
    const handlReset = () => {
        methods.reset();
    }
    const handlSignIn = (value: boolean) => {
        setSignIn(value);
        handlReset();
    }
    
    return (
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>

            <SwitchPanel signIn={signIn} setSignIn={handlSignIn} />
            <FormInput register={methods.register} option="email" label="Email" type="email" errors={methods.formState.errors} />
            <FormInput register={methods.register} option="password" label="Password" type="password" errors={methods.formState.errors} />
            {!signIn &&
                <FormInput register={methods.register} option="confirmPassword" label="Confirm password" type="password" errors={methods.formState.errors} />
            }
            <FormCheckBox register={methods.register} option="rememberMe" />
            <FormSubmit name={signIn ? "SIGN IN" : "SING UP"} />

        </form>
        </FormProvider>
    )
}

export default FormComponent