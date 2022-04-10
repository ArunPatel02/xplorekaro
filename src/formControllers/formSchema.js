import * as Yup from 'yup';

const formValidationSchema = [
    Yup.object().shape({
        email : Yup.string().email('Invalid email').required('*Email is required'),
        password : Yup.string().required("*Password is required")
    }),
    Yup.object().shape({
        email : Yup.string().email('Invalid email').required('*Email is required'),
        name : Yup.string().required("*Name is required"),
        password : Yup.string().required("*Password is required"),
        conformPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Conform Password is required")
    }),
    Yup.object().shape({
        otp : Yup.string().required("*otp is required").length(6 , "*otp must be of 6 digit")
    })
]

export default formValidationSchema