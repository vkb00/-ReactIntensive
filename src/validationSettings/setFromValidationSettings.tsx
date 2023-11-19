import { FieldValues, RegisterOptions, UseFormGetValues } from "react-hook-form";
import { FormData } from "../interfaces/FormData"

export const setValidation = (validationName: string, getFormValues: UseFormGetValues<FieldValues>):RegisterOptions<FormData> => {
    switch (validationName) {
        case "email":
            return {
                required: 'Required field',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address try example@gmail.com',
                },
                minLength: {
                    value: 8,
                    message: 'Minimum length: 8 characters',
                },
            };

        case "password":
            return {
                required: 'Required field',
                minLength: {
                    value: 8,
                    message: 'Minimum length: 8 characters',
                },
            };

        case "confirmPassword":
            return {
                required: 'Required field',
                minLength: {
                    value: 8,
                    message: 'Minimum length: 8 characters',
                },
                validate: (value) => value === getFormValues("password") || "Passwords must match",
            }

        default:
            return {}
        
    }
}