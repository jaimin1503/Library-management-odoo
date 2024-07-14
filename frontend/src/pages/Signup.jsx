import "./Styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setSignupData } from "../redux/slices/authSlice";
import { signUp } from "../utils/auth";
import Navbar from "../components/Navbar";
import emailjs from 'emailjs-com';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
  });
  const [otpVarify, setOtpVarify] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOTP] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getOTP = () => {
    const optTemp = Math.floor(100000 + Math.random() * 900000).toString();
    setOTP(optTemp);
    console.log(optTemp);
    console.log("Inside genOTP");

    emailjs.send('service_47v6yhp', 'template_bs5tdjk',{
      name: formData.firstName,
      otp: optTemp,
      to_email: formData.email,
    }, 'Lx9Z4TNqPKTQ1oiUO')
    .then((response) => {
      console.log('Email sent successfully!', response);
    })
    .catch((error) => {
      console.error('Email could not be sent:', error);
    });
  }

  const varifyOTP = (e) => {
    e.preventDefault();

    if(e.target.value === otp)
    {
      setOtpVarify(true);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    dispatch(signUp(formData, navigate, setError));
    dispatch(setLoading(false));
  };

  return (
    <>
      <nav>
        <h1 className=" font-bold text-3xl m-4">Page Turners</h1>
      </nav>
      <div className="w-full h-full flex justify-center items-center sm:px-10 py-10 md:py-10">
        <div className="w-full lg:w-1/2 h-auto md:border border-blue-300 rounded-2xl px-5 sm:px-20 py-5">
          <h1 className="text-3xl sm:text-4xl font-medium text-center mb-5">
            SignUp to ResumeHub
          </h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field  "
              placeholder="FirstName"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Lastname"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Username"
              onChange={handleChange}
              name="userName"
              value={formData.userName || ""}
            />
            <input
              type="email"
              className="input-field  "
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Contact no."
              onChange={handleChange}
              name="contactNumber"
              value={formData.contactNumber || ""}
            />
            <input
              type="password"
              className="input-field  "
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formData.password || ""}
            />
            <button type="submit" className="submit-button hover:bg-blue-600">
              Continue
            </button>
          </form>
          <div className=" text-center">
            <p className=" my-8 w-full border-b leading-[.1em]">
              <span className=" bg-white px-2">or</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-600">Already have an account?</p>
            <a href="/login" className="text-blue-500 ml-2">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
