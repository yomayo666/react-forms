// validationSchemas.ts
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .matches(/^[A-Z]/, "Name should start with an uppercase letter"),

  age: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .required("Age is a required field")
    .test("is-not-negative", "Age must not be negative", (value) => value >= 0),

  email: yup
    .string()
    .required("City is a required field")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is a required field")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{8,})/,
      "Password must contain at least 8 characters, including 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character"
    ),

  confirmPassword: yup
    .string()
    .required("Confirm Password is a required field")
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),

  gender: yup.string().required("Gender is a required field"),

  acceptTerms: yup.boolean().oneOf([true], 'You must accept the Terms and Conditions to proceed'),

  phone: yup
    .string()
    .required("Phone is a required field")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Invalid phone number format"
    ),
  image: yup
    .mixed()
    .test("fileSize", "File size is too large", (value) => {
      const files = value as FileList;
      return files.length === 0 || (files[0].size / 1024 / 1024) <= 5; // Максимальный размер файла 5MB
    })
    .test("fileType", "Invalid file type. Only JPEG and PNG are allowed", (value) => {
      const files = value as FileList;
      return files.length === 0 || ['image/jpeg', 'image/png'].includes(files[0].type);
    }),
  country: yup.string().required("Country is a required field"),
});
export { formSchema };