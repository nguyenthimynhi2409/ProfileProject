import "./Register.css";
import React, { useState } from "react";
import { register } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "./validation";

const Register = (navigate) => {
  navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");

  var phone_regex = /((09|03|07|08|05)+([0-9]{9})\b)/g;
  var email_regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    validatePassword(password,confirmPassword);
    if (
      password === confirmPassword &&
      age > 0 &&
      
      gender !== "" &&
      email_regex.test(email) == true &&
      password.length >= 8
    ) {
      const myForm = new FormData();
      let account = {};
      myForm.set("first_name", firstName);
      myForm.set("last_name", lastName);
      myForm.set("email", email);
      myForm.set("age", age);
      myForm.set("gender", gender);
      myForm.set("phone_number", phone);
      myForm.set("avatar", avatar);
      myForm.set("password", password);
      for (const [key, value] of myForm) {
        account[key] = value;
      }
      register(account);
      navigate("/view");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmitForm}>
        <label>
          First Name
          <input
            type="text"
            placeholder="First name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            placeholder="Last name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>Gender</label>
        <select
          onChange={(e) => {
            setGender(e.target.value);
            if (e.target.value === "Male")
              setAvatar(
                "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650012178/ProfileProject/male_lnnezr.png"
              );
            if (e.target.value === "Female")
              setAvatar(
                "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650012124/ProfileProject/female_ioyhza.jpg"
              );
          }}
          value={gender}
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>
          Age
          <input
            type="number"
            placeholder="Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            placeholder="Phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
