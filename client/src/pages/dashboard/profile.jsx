// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Avatar,
//   Typography,
//   Tabs,
//   TabsHeader,
//   Tab,
//   Switch,
//   Tooltip,
//   Button,
// } from "@material-tailwind/react";
// import {
//   HomeIcon,
//   ChatBubbleLeftEllipsisIcon,
//   Cog6ToothIcon,
//   PencilIcon,
// } from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";
// import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
// import { platformSettingsData, conversationsData, projectsData } from "@/data";

// export function Profile() {
//   return (
//     <>
//       <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
//         <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
//       </div>
//       <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
//         <CardBody className="p-4">
//           <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
//             <div className="flex items-center gap-6">
//               <Avatar
//                 src="/img/bruce-mars.jpeg"
//                 alt="bruce-mars"
//                 size="xl"
//                 variant="rounded"
//                 className="rounded-lg shadow-lg shadow-blue-gray-500/40"
//               />
//               <div>
//                 <Typography variant="h5" color="blue-gray" className="mb-1">
//                   Richard Davis
//                 </Typography>
//                 <Typography
//                   variant="small"
//                   className="font-normal text-blue-gray-600"
//                 >
//                   CEO / Co-Founder
//                 </Typography>
//               </div>
//             </div>
//             <div className="w-96">
//               <Tabs value="app">
//                 <TabsHeader>
//                   <Tab value="app">
//                     <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
//                     App
//                   </Tab>
//                   <Tab value="message">
//                     <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
//                     Message
//                   </Tab>
//                   <Tab value="settings">
//                     <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
//                     Settings
//                   </Tab>
//                 </TabsHeader>
//               </Tabs>
//             </div>
//           </div>
//           <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-3">
//                 Platform Settings
//               </Typography>
//               <div className="flex flex-col gap-12">
//                 {platformSettingsData.map(({ title, options }) => (
//                   <div key={title}>
//                     <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
//                       {title}
//                     </Typography>
//                     <div className="flex flex-col gap-6">
//                       {options.map(({ checked, label }) => (
//                         <Switch
//                           key={label}
//                           id={label}
//                           label={label}
//                           defaultChecked={checked}
//                           labelProps={{
//                             className: "text-sm font-normal text-blue-gray-500",
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <ProfileInfoCard
//               title="Profile Information"
//               description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
//               details={{
//                 "first name": "Alec M. Thompson",
//                 mobile: "(44) 123 1234 123",
//                 email: "alecthompson@mail.com",
//                 location: "USA",
//                 social: (
//                   <div className="flex items-center gap-4">
//                     <i className="fa-brands fa-facebook text-blue-700" />
//                     <i className="fa-brands fa-twitter text-blue-400" />
//                     <i className="fa-brands fa-instagram text-purple-500" />
//                   </div>
//                 ),
//               }}
//               action={
//                 <Tooltip content="Edit Profile">
//                   <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
//                 </Tooltip>
//               }
//             />
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-3">
//                 Platform Settings
//               </Typography>
//               <ul className="flex flex-col gap-6">
//                 {conversationsData.map((props) => (
//                   <MessageCard
//                     key={props.name}
//                     {...props}
//                     action={
//                       <Button variant="text" size="sm">
//                         reply
//                       </Button>
//                     }
//                   />
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="px-4 pb-4">
//             <Typography variant="h6" color="blue-gray" className="mb-2">
//               Projects
//             </Typography>
//             <Typography
//               variant="small"
//               className="font-normal text-blue-gray-500"
//             >
//               Architects design houses
//             </Typography>
//             <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
//               {projectsData.map(
//                 ({ img, title, description, tag, route, members }) => (
//                   <Card key={title} color="transparent" shadow={false}>
//                     <CardHeader
//                       floated={false}
//                       color="gray"
//                       className="mx-0 mt-0 mb-4 h-64 xl:h-40"
//                     >
//                       <img
//                         src={img}
//                         alt={title}
//                         className="h-full w-full object-cover"
//                       />
//                     </CardHeader>
//                     <CardBody className="py-0 px-1">
//                       <Typography
//                         variant="small"
//                         className="font-normal text-blue-gray-500"
//                       >
//                         {tag}
//                       </Typography>
//                       <Typography
//                         variant="h5"
//                         color="blue-gray"
//                         className="mt-1 mb-2"
//                       >
//                         {title}
//                       </Typography>
//                       <Typography
//                         variant="small"
//                         className="font-normal text-blue-gray-500"
//                       >
//                         {description}
//                       </Typography>
//                     </CardBody>
//                     <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
//                       <Link to={route}>
//                         <Button variant="outlined" size="sm">
//                           view project
//                         </Button>
//                       </Link>
//                       <div>
//                         {members.map(({ img, name }, key) => (
//                           <Tooltip key={name} content={name}>
//                             <Avatar
//                               src={img}
//                               alt={name}
//                               size="xs"
//                               variant="circular"
//                               className={`cursor-pointer border-2 border-white ${
//                                 key === 0 ? "" : "-ml-2.5"
//                               }`}
//                             />
//                           </Tooltip>
//                         ))}
//                       </div>
//                     </CardFooter>
//                   </Card>
//                 )
//               )}
//             </div>
//           </div>
//         </CardBody>
//       </Card>
//     </>
//   );
// }

// export default Profile;



// new


import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import BASE_URL from "../../utils/fetchData";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    firstName: auth?.user?.firstName || "",
    lastName: auth?.user?.lastName || "",
    email: auth?.user?.email || "",
    phone: auth?.user?.phone || "",
    address: auth?.user?.address || "",
    image: auth?.user?.image || "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone must be a 10-digit number").required("Phone is required"),
    // image: Yup.mixed().nullable(),
  });

  const handleSubmit = async (values) => {
    const { firstName, lastName, email, phone } = values;
    const userId = auth.user._id;

    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/api/v1/auth/user/update-profile`, {
        userId,
        firstName,
        lastName,
        email,
        phone,
      });

      if (response?.data?.error) {
        toast.error(response?.data?.error);
        console.log(response?.data?.error);
      } else {
        setAuth({ ...auth, user: response?.data?.user });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = response?.data?.user;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  // const handleImageChange = (event, setFieldValue) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFieldValue("image", reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Update Profile</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-700">First Name:</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Last Name:</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Email:</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Phone:</label>
                  <Field
                    name="phone"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* <div className="mb-4">
                  <label className="block text-gray-700">Address:</label>
                  <Field
                    name="address"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                </div> */}

                <div className="mb-4">
                    <div className="mt-2">
                      <img
                        src={auth?.user?.image}
                        alt="Profile Preview"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export {Profile};
