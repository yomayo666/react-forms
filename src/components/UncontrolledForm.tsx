import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { formSchema as schema } from "../components/detailsForm/validationSchemas";
import FormComponent from "./detailsForm/FormComponent";
import IFormInput from "./detailsForm/interface";

const UncontrolledForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema) as any,
    defaultValues: {

    },
    mode: 'onSubmit', 
  });

  const onSubmit = async (data: IFormInput) => {
    const filesInfo = Array.from(data.image).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    const sanitizedData = { ...data, image: filesInfo };

    dispatch(setFormData(sanitizedData));

    navigate('/');
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
export default UncontrolledForm