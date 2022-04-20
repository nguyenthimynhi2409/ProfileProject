import "./Register.css";
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

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    const phone = e.target.phone.value;
    let avatar = "";
    const address = "";
    if (gender == "Male")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
    if (gender == "Female")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";

    if (
      validatePassword(password, confirm_password) &&
      validateAge(age) &&
      validateGender(gender) &&
      (await validateEmail(email)) &&
      validatePhone(phone)
    ) {
      let account = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        age: age,
        gender: gender,
        password: password,
        avatar: avatar,
        phone_number: phone,
        address: address,
      };
      register(account).then(() => navigate("/"));
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
              name="first_name"
            />
          </label>
          <label className="last-name">
            Last Name
            <input
              type="text"
              placeholder="Last name"
              required
              name="last_name"
            />
          </label>
        </div>

        <label className="email">
          Email
          <input type="text" placeholder="Email" required name="email" />
        </label>
        <label>Gender</label>
        <select name="gender">
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>
          Age
          <input type="number" placeholder="Age" required name="age" />
        </label>
        <label>
          Phone number
          <input type="tel" placeholder="Phone number" required name="phone" />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm password"
            required
            name="confirm_password"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;