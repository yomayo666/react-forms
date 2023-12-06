import React from "react";
import { Country } from "./interface";
import IFormInput from "./interface";
import {FieldErrors, UseFormRegister } from "react-hook-form";
interface FormComponentProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
  handleCountryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  countries: Country[];
}

const FormComponent: React.FC<FormComponentProps> = ({
  handleSubmit,
  register,
  errors,
  handleCountryChange,
  countries,
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label > Name</label>
    <input type="string" {...register("name")} autoComplete="name"/>
    {errors.name && <p>{errors.name.message}</p>}

    <label htmlFor="age">Age</label>
    <input type="number" {...register("age")} id="age" autoComplete="age"/>
    {errors.age && <p>{errors.age.message}</p>}

    <label htmlFor="email">Email</label>
    <input type="email" {...register("email")} id="email" autoComplete="email"/>
    {errors.email && <p>{errors.email.message}</p>}

    <label htmlFor="password">Password</label>
    <input type="password" {...register("password")} id="password" autoComplete="off"/>
    {errors.password && <p>{errors.password.message}</p>}

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" {...register("confirmPassword")} id="confirmPassword" autoComplete="off"/>
    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

    <div>
      <label htmlFor="male">
        Male
        <input type="radio" id="male" value="male" {...register("gender")}/>
      </label>

      <label htmlFor="female">
        Female
        <input type="radio" id="female" value="female" {...register("gender")} />
      </label>

      <label htmlFor="other">
        Other
        <input type="radio" id="other" value="other" {...register("gender")} />
        {errors.gender && <p>{errors.gender.message}</p>}
      </label>
    </div>

    <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
    <input type="checkbox" {...register("acceptTerms")} id="acceptTerms" autoComplete="off"/>
    {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}

    <label htmlFor="phone">Phone</label>
    <input {...register("phone")} id="phone" autoComplete="phone"/>
    {errors.phone && <p>{errors.phone.message}</p>}

    <label htmlFor="image">Image</label>
    <input
    autoComplete="off"
    id="image"
      type="file"
      {...register("image")}
      accept="image/jpeg, image/png"
    />
    {errors.image && <p>{errors.image.message}</p>}

    <div>
      <label htmlFor="country">Country</label>
      <select id="country" {...register("country")} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      {errors.country && <p>{errors.country.message}</p>}
    </div>

    <input type="submit" />
  </form>
  );
};

export default FormComponent;
