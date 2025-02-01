// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";


// export function SignIn() {
//   return (
//     <section className="m-8 flex gap-4">
//       <div className="w-full lg:w-3/5 mt-24">
//         <div className="text-center">
//           <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
//           <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
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
//             <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
//               Password
//             </Typography>
//             <Input
//               type="password"
//               size="lg"
//               placeholder="********"
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
//             Sign In
//           </Button>

//           <div className="flex items-center justify-between gap-2 mt-6">
//             <Checkbox
//               label={
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex items-center justify-start font-medium"
//                 >
//                   Subscribe me to newsletter
//                 </Typography>
//               }
//               containerProps={{ className: "-ml-2.5" }}
//             />
//             <Typography variant="small" className="font-medium text-gray-900">
//               <a href="#">
//                 Forgot Password
//               </a>
//             </Typography>
//           </div>
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
//             Not registered?
//             <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
//           </Typography>
//         </form>

//       </div>
//       <div className="w-2/5 h-full hidden lg:block">
//         <img
//           src="/img/pattern.png"
//           className="h-full w-full object-cover rounded-3xl"
//         />
//       </div>

//     </section>
//   );
// }

// export default SignIn;


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/context";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import BASE_URL from "../../utils/fetchData";
import {Heading} from "../../components";
import { Link } from "react-router-dom";
const SignIn = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, values);

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/dashboard/tables");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <Heading heading="Login"/>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 px-4 py-3 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 px-4 py-3 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-500 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                </span>
             
                <Link
    to="/auth/sign-up"
    className="text-blue-500 hover:underline font-medium"
  >
    Sign Up
  </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export {SignIn};
