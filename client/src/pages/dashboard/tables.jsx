// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
//   Tooltip,
//   Progress,
// } from "@material-tailwind/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";

// export function Tables() {
//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
//           <Typography variant="h6" color="white">
//           Stock Prices List
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["author", "function", "status", "employed", ""].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-bold uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {authorsTableData.map(
//                 ({ img, name, email, job, online, date }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === authorsTableData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                           <div>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-semibold"
//                             >
//                               {name}
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {email}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {job[0]}
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {job[1]}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Chip
//                           variant="gradient"
//                           color={online ? "green" : "blue-gray"}
//                           value={online ? "online" : "offline"}
//                           className="py-0.5 px-2 text-[11px] font-medium w-fit"
//                         />
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {date}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           as="a"
//                           href="#"
//                           className="text-xs font-semibold text-blue-gray-600"
//                         >
//                           Edit
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//       {/* <Card>
//         <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
//           <Typography variant="h6" color="white">
//             Projects Table
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["companies", "members", "budget", "completion", ""].map(
//                   (el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   )
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {projectsTableData.map(
//                 ({ img, name, members, budget, completion }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === projectsTableData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <Avatar src={img} alt={name} size="sm" />
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-bold"
//                           >
//                             {name}
//                           </Typography>
//                         </div>
//                       </td>
//                       <td className={className}>
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
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {budget}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <div className="w-10/12">
//                           <Typography
//                             variant="small"
//                             className="mb-1 block text-xs font-medium text-blue-gray-600"
//                           >
//                             {completion}%
//                           </Typography>
//                           <Progress
//                             value={completion}
//                             variant="gradient"
//                             color={completion === 100 ? "green" : "gray"}
//                             className="h-1"
//                           />
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           as="a"
//                           href="#"
//                           className="text-xs font-semibold text-blue-gray-600"
//                         >
//                           <EllipsisVerticalIcon
//                             strokeWidth={2}
//                             className="h-5 w-5 text-inherit"
//                           />
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card> */}
//     </div>
//   );
// }

// export default Tables;





// new version

// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

// export function Tables() {
//   const [stocks, setStocks] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/stocks");
//         setStocks(response.data);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
//           <Typography variant="h6" color="white">
//             Stock Prices List
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["Symbol", "Open", "High", "Low", "Last Price", "Change", "Volume", "previousClose","pChange", "totalTradedValue", "lastUpdateTime", "yearHigh", "yearLow", "perChange365d","date365dAgo","date30dAgo","perChange30d"].map((el) => (
//                   <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
//                     <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {stocks.length > 0 ? (
//                 stocks.map((stock, index) => (
//                   <tr key={index}>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.symbol}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.open}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayHigh}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayLow}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.lastPrice}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.change} ({stock.pChange}%)</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.totalTradedVolume}</td>


//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.previousClose}</td>

//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.pChange}</td>
                     
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.totalTradedValue}</td>


//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.lastUpdateTime}</td>



//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.yearHigh}</td>



//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.yearLow}</td>


//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.perChange365d}</td>

//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.date365dAgo}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.date30dAgo}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.perChange30d}</td>

//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center py-3">Loading stock data...</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default Tables;






// refresh version

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

// export function Tables() {
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(false);
  
//   // Fetch the ETF stock data initially
//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/stocks");
//       setStocks(response.data);
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   // Fetch latest stock data and store it in the database
//   const fetchAndStoreLatestData = async () => {
//     setLoading(true);
//     try {
//       // Trigger scraping and storing ETF data
//       await axios.get("http://localhost:5000/scrape-etf");
//       // After storing the data, fetch the latest stock data
//       await fetchStockData();
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching and storing stock data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStockData(); // Initial fetch on component mount
//   }, []);

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
//           <Typography variant="h6" color="white">
//             Stock Prices List
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           {/* Button to trigger fetching and storing latest data */}
//           <Button 
//             variant="gradient" 
//             color="blue" 
//             onClick={fetchAndStoreLatestData} 
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Fetch Latest Data"}
//           </Button>
//           <table className="w-full min-w-[640px] table-auto mt-4">
//             <thead>
//               <tr>
//                 {["Symbol", "Open", "High", "Low", "Last Price", "Change", "Volume", "Previous Close", "PChange", "Total Traded Value", "Last Update Time", "Year High", "Year Low", "Per Change 365d", "Date 365d Ago", "Date 30d Ago", "Per Change 30d"].map((el) => (
//                   <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
//                     <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {stocks.length > 0 ? (
//                 stocks.map((stock, index) => (
//                   <tr key={index}>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.symbol}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.open}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayHigh}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayLow}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.lastPrice}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.change} ({stock.pChange}%)</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.totalTradedVolume}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.previousClose}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.pChange}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.totalTradedValue}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.lastUpdateTime}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.yearHigh}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.yearLow}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.perChange365d}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.date365dAgo}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.date30dAgo}</td>
//                     <td className="py-3 px-5 border-b border-blue-gray-50">{stock.perChange30d}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="16" className="text-center py-3">Loading stock data...</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default Tables;




// new one collapse

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function Tables() {
  const [stocks, setStocks] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/stocks");
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const handleRowToggle = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Stock Prices List
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Symbol", "Open", "High", "Low", "Last Price", "Change"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stocks.length > 0 ? (
                stocks.map((stock, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => handleRowToggle(index)} className="cursor-pointer hover:bg-gray-200">
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.symbol}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.open}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayHigh}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.dayLow}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.lastPrice}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{stock.change}</td>
                    </tr>
                    {expandedRows[index] && (
                      <tr>
                        <td colSpan="6" className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="text-sm">
                            <strong>Previous Close:</strong> {stock.previousClose}<br />
                            <strong>Year High:</strong> {stock.yearHigh}<br />
                            <strong>Year Low:</strong> {stock.yearLow}<br />
                            <strong>Last Update Time:</strong> {stock.lastUpdateTime}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-3">Loading stock data...</td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
