import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(5, "Enter valid name").required("Name is required"),
  email: Yup.string().email("Enter valid email Id ").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default validationSchema;
