import "./Register.css";
import React, { useState } from "react";
import { register } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
  validateAge,
  validateEmail,
  validateGender,
  validatePassword,
  validatePhone,
} from "./validation";

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (
      validatePassword(password, confirmPassword) &&
      validateAge(age) &&
      validateGender(gender) &&
      (await validateEmail(email)) &&
      validatePhone(phone)
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
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="name-container">
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
          <label className="last-name">
            Last Name
            <input
              type="text"
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <label className="email">
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
                "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png"
              );
            if (e.target.value === "Female")
              setAvatar(
                "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png"
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
