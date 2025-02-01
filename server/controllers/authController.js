


// joi validation using 
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import {registerSchema, loginSchema, updateProfileSchema, changeStatusSchema, idSchema} from "../helpers/validation.js";
dotenv.config();



// Register Controller
const registerController = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.json({ success: false, message: error.details[0].message });
    }

    const { email, password } = req.body;
;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "Already a registered User! Please Login",
      });
    }

    // Hash password and save new user
    const hashedPassword = await hashPassword(password);
    const user = await new User({
      ...req.body,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      status: "approved",
    }).save();

    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.json({ success: false, message: error.details[0].message });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Email is not registered",
      });
    }

    // Check user status
    if (user.status === "pending") {
      return res.json({
        success: false,
        message: "Your registration request is pending approval by the admin.",
      });
    }

    if (user.status === "rejected") {
      return res.json({
        success: false,
        message: "Your registration has been rejected by the admin.",
      });
    }

    // Validate password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        image:user.image,
        status: user.status,
        _id: user._id,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in login",
      error,
    });
  }
};


const changeUserStatus = async (req, res) => {
  try {
    const { error } = changeStatusSchema.validate(req.body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }

    const { userId, status } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ message: "User not found" });
    }

    user.status = status;
    await user.save();

    // Replace with your email function
    sendStatusUpdateEmail(user.email, status);

    res.status(200).json({
      success: true,
      message: `User status updated to ${status}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error updating status",
      error,
    });
  }
};

// Get student details by ID
const getStudentDetails = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params);
    if (error) {
      return res.json({ message: error.details[0].message });
    }

    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.json({ message: "Student not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error fetching student details.",
    });
  }
};

// Delete student by ID
const deleteStudent = async (req, res) => {
  try {
    const { error } = idSchema.validate(req.params);
    if (error) {
      return res.json({ message: error.details[0].message });
    }

    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error deleting student.",
    });
  }
};

// Update user profile
const updateProfileController = async (req, res) => {
  try {
    const { error } = updateProfileSchema.validate(req.body);
    if (error) {
      return res.json({ message: error.details[0].message });
    }

    const { userId, firstName, lastName, email, phone} = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ message: "User not found" });
    }

    // let newImageUrl = user.image;
    // if (image && image !== user.image) {
    //   if (user.image) {
    //     const urlSegments = user.image.split("/");
    //     const publicId = urlSegments[urlSegments.length - 1].split(".")[0];
    //     await cloudinary.uploader.destroy(`user_images/${publicId}`);
    //   }

    //   const uploadResponse = await cloudinary.uploader.upload(image, {
    //     folder: "user_images",
    //   });
    //   newImageUrl = uploadResponse.secure_url;
    // }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, email, phone },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error updating profile",
      error,
    });
  }
};

// Get all students
const getAllStudentsController = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching students",
      error,
    });
  }
};

// Test controller
const testController = (req, res) => {
  res.status(200).json({
    message: "Routes are working correctly",
    success: true,
  });
};

// export { registerController, loginController };

export { registerController, loginController, changeUserStatus, testController, getAllStudentsController, updateProfileController, deleteStudent, getStudentDetails };
