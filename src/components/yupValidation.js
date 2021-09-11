import * as yup from 'yup';
import strings from '../global/strings.json';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(strings.emailValidation)
    .required(strings.emailRequired),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, strings.mustSmallLetter)
    .matches(/\w*[A-Z]\w*/, strings.mustCapitalLetter)
    .matches(/\d/, strings.mustNumber)
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, strings.mustSpecialChar)
    .min(8, ({min}) => `${strings.passwordMustBeAtLeast} ${min} characters`)
    .required(strings.passwordRequired),
});

export const signUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[0-9a-zA-Z]+$/, strings.mustOnlyBeLettersAndNumbers)
    .min(3, ({min}) => `${strings.usernameMustBeAtLeast} ${min} characters`)
    .max(10, ({max}) => `${strings.usernameMustBeMax} ${max} characters`)
    .required(),
  email: yup
    .string()
    .email(strings.emailValidation)
    .required(strings.emailRequired),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, strings.mustSmallLetter)
    .matches(/\w*[A-Z]\w*/, strings.mustCapitalLetter)
    .matches(/\d/, strings.mustNumber)
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, strings.mustSpecialChar)
    .min(8, ({min}) => `${strings.passwordMustBeAtLeast} ${min} characters`)
    .required(strings.passwordRequired),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], strings.passwordsDoNotMatch),
});
