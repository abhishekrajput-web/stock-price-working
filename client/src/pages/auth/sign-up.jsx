// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";


// export function SignUp() {
//   return (
//     <section className="m-8 flex">
//             <div className="w-2/5 h-full hidden lg:block">
//         <img
//           src="/img/pattern.png"
//           className="h-full w-full object-cover rounded-3xl"
//         />
//       </div>
//       <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
//         <div className="text-center">
//           <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
//           <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
//         </div>
//         <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
//           <div className="mb-1 flex flex-col gap-6">
//             <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
//               Your email
//             </Typography>
//             <Input
//               size="lg"
//               placeholder="name@mail.com"
//               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//               labelProps={{
//                 className: "before:content-none after:content-none",
//               }}
//             />
//           </div>
//           <Checkbox
//             label={
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="flex items-center justify-start font-medium"
//               >
//                 I agree the&nbsp;
//                 <a
//                   href="#"
//                   className="font-normal text-black transition-colors hover:text-gray-900 underline"
//                 >
//                   Terms and Conditions
//                 </a>
//               </Typography>
//             }
//             containerProps={{ className: "-ml-2.5" }}
//           />
//           <Button className="mt-6" fullWidth>
//             Register Now
//           </Button>

//           <div className="space-y-4 mt-8">
//             <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
//               <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g clipPath="url(#clip0_1156_824)">
//                   <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
//                   <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
//                   <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
//                   <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1156_824">
//                     <rect width="16" height="16" fill="white" transform="translate(0.5)" />
//                   </clipPath>
//                 </defs>
//               </svg>
//               <span>Sign in With Google</span>
//             </Button>
//             <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
//               <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
//               <span>Sign in With Twitter</span>
//             </Button>
//           </div>
//           <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
//             Already have an account?
//             <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
//           </Typography>
//         </form>

//       </div>
//     </section>
//   );
// }

// export default SignUp;















// simple
// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import BASE_URL from "../../utils/fetchData";
// import axios from "axios";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string().email("Invalid email format").required("Email is required"),
//     phone: Yup.string()
//       .matches(/^(9|8|7|6)\d{9}$/, "Invalid phone number")
//       .required("Phone number is required"),
//     password: Yup.string()
//       .required("Password is required")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//         "Password must contain 8 characters, a number, an uppercase, and a lowercase"
//       ),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });


//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const { data } = await axios.post(`${BASE_URL}/api/v1/auth/register`, values);
//       if (data.success) {
//         toast.success(data.message);
//         navigate("auth/sign-in");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="px-6 py-5 bg-blue-500">
//       <h1 className="text-2xl font-bold text-center text-white">Register</h1>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ setFieldValue, values, isSubmitting }) => (
//           <Form className="flex flex-col items-center gap-5">
//             {/* First Name */}
//             <Field
//               name="firstName"
//               placeholder="First Name"
//               className="px-4 py-2 border-none rounded-sm w-full max-w-[750px] outline-none"
//             />
//             <ErrorMessage name="firstName" component="div" className="text-red-500" />

//             {/* Last Name */}
//             <Field
//               name="lastName"
//               placeholder="Last Name"
//               className="px-4 py-2 border-none rounded-sm w-full max-w-[750px] outline-none"
//             />
//             <ErrorMessage name="lastName" component="div" className="text-red-500" />

      

//             {/* Email and OTP */}
//             <div className="w-full max-w-[750px] flex flex-col gap-3">
//               <Field
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 className="px-4 py-2 border-none rounded-sm w-full outline-none"
//               />
//               <ErrorMessage name="email" component="div" className="text-red-500" />
           
//             </div>

        

//             {/* Other Fields */}
//             <Field
//               name="phone"
//               placeholder="Phone"
//               className="px-4 py-2 border-none rounded-sm w-full max-w-[750px] outline-none"
//             />
//             <ErrorMessage name="phone" component="div" className="text-red-500" />

//             <Field
//               name="password"
//               type="password"
//               placeholder="Password"
//               className="px-4 py-2 border-none rounded-sm w-full max-w-[750px] outline-none"
//             />
//             <ErrorMessage name="password" component="div" className="text-red-500" />

//             <Field
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm Password"
//               className="px-4 py-2 border-none rounded-sm w-full max-w-[750px] outline-none"
//             />
//             <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

//             <button
//               type="submit"
//               className="px-4 py-2 w-full max-w-[750px] bg-white text-yellow-500 font-semibold text-xl"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Register"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export {SignUp};







// with styles

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../utils/fetchData";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^(9|8|7|6)\d{9}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password must contain at least 8 characters, a number, an uppercase, and a lowercase"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/auth/register`, values);
      if (data.success) {
        toast.success(data.message);
        navigate("/auth/sign-in");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <Field name="firstName" placeholder="First Name" className="input-field" />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>
                <div className="w-1/2">
                  <Field name="lastName" placeholder="Last Name" className="input-field" />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
              </div>
              <Field name="email" type="email" placeholder="Email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
              <Field name="phone" placeholder="Phone Number" className="input-field" />
              <ErrorMessage name="phone" component="div" className="error-message" />
              <Field name="password" type="password" placeholder="Password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
              <Field name="confirmPassword" type="password" placeholder="Confirm Password" className="input-field" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { SignUp };
