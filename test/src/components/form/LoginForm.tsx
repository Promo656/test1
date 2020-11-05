import {Field, reduxForm} from "redux-form";
import {renderField} from "../common/inputs";
import {Button} from "@material-ui/core";
import React from "react";

const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = (max: number) => (value: string | any[]) =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined

const maxLength15 = maxLength(15)

export const minLength = (min: number) => (value: string | any[]) =>
    value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined

export const minLength2 = minLength(2)

const alphaNumeric = (value: string) =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

const FieldLevelValidationForm = (props: { handleSubmit: any; pristine: any; reset: any; submitting: boolean; }) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
                validate={[required, maxLength15, minLength2]}
                warn={alphaNumeric}
                variant="outlined"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required, minLength2]}
                variant="outlined"
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}>
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </Button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: "login"})(FieldLevelValidationForm)