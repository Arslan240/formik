import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRules, { message: "Password must have 5 characters at min, 1 uppercase letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required")
})
