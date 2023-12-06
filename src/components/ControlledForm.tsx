import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, RootState } from "../store/store";
import FormComponent from "./detailsForm/FormComponent";
import IFormInput from "../components/detailsForm/interface";
import { useNavigate } from "react-router-dom";
import { formSchema as schema } from "../components/detailsForm/validationSchemas";

export const ControlledForm: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      // name: "",
      // age: undefined,
      // email: "",
      // password: "",
      // confirmPassword: "",
      // gender: "",
      // acceptTerms: false,
      // phone: "",
      // image: undefined,
      // country: "",
    } ,
    mode: "onChange",
  });

  const onSubmit = async (data: IFormInput) => {

    const files: File[] = Array.from(data.image);

    const filesInfo = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
  
    const sanitizedData = { ...data, image: filesInfo };
  
    dispatch(setFormData(sanitizedData));
  
    navigate("/");
  };
  

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = event.target.value;
    setValue("country", selectedCountryId);
    trigger("country");
  };

  return (
    <FormComponent
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      handleCountryChange={handleCountryChange}
      countries={countries}
    />
  );
};
