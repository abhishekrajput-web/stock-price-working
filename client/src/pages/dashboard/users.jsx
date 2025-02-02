import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, Typography, Chip } from "@material-tailwind/react";

export function UsersTable() {
  const [users, setUsers] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
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
            Users List
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name", "Email", "Phone Number", "Profile Photo", "Joined At", "Status"].map((header) => (
                  <th key={header} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <React.Fragment key={index}>
                    <tr
                      onClick={() => handleRowToggle(index)}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        {user.name ? user.name : `${user.firstName} ${user.lastName}`}
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{user.email}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">{user.phone}</td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <img
                          src={user.image}
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <Chip
                          color={user.isActive ? "green" : "red"}
                          value={user.isActive ? "Active" : "Inactive"}
                        />
                      </td>
                    </tr>
                    {expandedRows[index] && (
                      <tr>
                        <td colSpan="6" className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="text-sm">
                            <strong>User ID:</strong> {user._id}<br />
                            <strong>Last Login:</strong>{" "}
                            {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "Never"}<br />
                            <strong>Account Status:</strong>{" "}
                            {user.isActive ? "Verified" : "Pending Verification"}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-3">
                    Loading user data...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default UsersTable;
