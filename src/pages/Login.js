import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/styles/login.css";
import axios from "axios";
import LoadingSpinner from "../components/loader"
import { UserDataContext } from "../providers/userdataprovider";

const Login = () => {
    const navigate = useNavigate();
    const { setUserData } = useContext(UserDataContext);
    // console.log("login data",admiData)
    const [showLoader, setShowLoader] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValidPassword = (password) => {
        // const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        return password.length >= 8;
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.username) {
            newErrors.username = "Username is required";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long";
        }
        if (Object.keys(newErrors).length === 0) {
            handleAdminLogin(formData);
        } else {
            setErrors(newErrors);
        }
    };

    const handleAdminLogin = async () => {
        try {
            setShowLoader(true);
            const url = "https://staging.api.greentiger.in/api/v1/auth";

            const response = await axios.post(url, formData);
            // console.log("res", response);
            if (response.status === 200) {
                setShowLoader(false);
                localStorage.setItem(
                    "accessToken",
                    response.data.accessToken.token
                );
                localStorage.setItem("data", JSON.stringify(response.data));
                setUserData(response.data);
                navigate("/dashboard");
            } else {
                setShowLoader(false);
                setUserData(null);
                // setErrorMsg(response.data.message);
            }
        } catch (error) {
            setShowLoader(false);
            // setErrorMsg(error.message);
            console.log("error", error);
        }
    };

    return (
        <>
            {showLoader ? (
                <LoadingSpinner />
            ) : (
                <div className="loginPage">
                    {/* <h1 className="welcomeHeading">Welcome to Green Tiger</h1> */}

                    <div className="loginContainer">
                        <div className="imageBlock">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
                                alt="GreenTiger"
                            />
                        </div>

                        <div className="formBlock">
                            <div className="loginForm">
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
                                    alt="logo"
                                    style={{
                                        width: "90%",
                                        height: "20%",
                                        padding: "10px",
                                    }}
                                />

                                <div className="formGroup">
                                    <label className="lables">UserName</label>
                                    <input
                                        className="inputField"
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        placeholder="Enter your Name"
                                        required
                                        onChange={handleChange}
                                    />
                                    {errors.username && (
                                        <div className="error">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>

                                <div className="formGroup">
                                    <label className="lables">Password</label>
                                    <input
                                        className="inputField"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        placeholder="Enter your password"
                                        required
                                        onChange={handleChange}
                                    />
                                    {errors.password && (
                                        <div className="error">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="formGroup">
                                    <button
                                        className="loginBtn"
                                        type="submit"
                                        onClick={() => validateForm()}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
