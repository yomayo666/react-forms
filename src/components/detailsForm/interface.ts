export default interface IFormInput {
    name: string;
    age: number;
    email: string;
    phone: string;
    gender: string;
    password: string;
    acceptTerms: boolean;
    confirmPassword: string
    image: FileList;
    country: string;
  }

  export  interface Country {
    id: string;
    name: string;
  }