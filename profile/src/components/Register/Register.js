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
import { Form, Input, InputNumber, Button, Select } from "antd";
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterCircleFilled,
  AppstoreFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Footer } from "antd/lib/layout/layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Register = () => {
  toast.configure();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const navigate = useNavigate();

  const handleSubmitForm = async (value) => {
    // const handleSubmitForm = async (e) => {

    // e.preventDefault();

    // const first_name = value.first_name;
    // const last_name = value.last_name;
    // const email = value.email;
    // const age = value.age;
    // const gender = value.gender;
    // const password = value.password;
    // const confirm_password = value.confirm_password;
    // const phone = value.phone;
    // let avatar = "";
    // const address = "";
    // if (gender == "Male")
    //   avatar =
    //     "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
    // if (gender == "Female")
    //   avatar =
    //     "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";

    // if (
    //   validatePassword(password, confirm_password) &&
    //   validateAge(age) &&
    //   validateGender(gender) &&
    //   (await validateEmail(email)) &&
    //   validatePhone(phone)
    // ) {
    //   let account = {
    //     first_name: first_name,
    //     last_name: last_name,
    //     email: email,
    //     age: age,
    //     gender: gender,
    //     password: password,
    //     avatar: avatar,
    //     phone_number: phone,
    //     address: address,
    //   };
    //   register(account).then(() => navigate("/"));
    // }
    const first_name = value.first_name;
    const last_name = value.last_name;
    const email = value.email;
    const age = value.age;
    const gender = value.gender;
    const password = value.password;
    const confirm_password = value.confirm_password;
    const phone = value.phone_number;
    const role = "user";
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
        role: role,
        todo: []
      };
      register(account)
        .then(() => navigate("/"))
        .catch(() => toast("Server die"));
    }
  };
  const { Option } = Select;
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        {/* <form className="form" onSubmit={handleSubmitForm}>
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
      </form> */}
        <div className="form-register">
          <Form {...layout} className="nest-messages" onFinish={handleSubmitForm}>
            {/* firstname */}
            <Form.Item
              className="name"
              name={"first_name"}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* last name */}
            <Form.Item
              className="name"
              name={"last_name"}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* email */}
            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* select gender */}
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select gender"
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>
            {/* age */}
            <Form.Item
              name={"age"}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 1,
                  max: 150,
                },
              ]}
              // value={Number(this.value)<1? 1 : this.value}
            >
              <InputNumber />
            </Form.Item>
            {/* number */}
            <Form.Item
              name={"phone_number"}
              label="Phone number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input maxLength={12} minLength={9} />
            </Form.Item>
            {/* password */}
            <Form.Item
              name={"password"}
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* confirm password */}
            <Form.Item
              name={"confirm_password"}
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* submit */}
            <Form.Item
              className="submit"
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer>
        <div className="copyright">
          <div className="media">
            <FacebookFilled />
            <YoutubeFilled />
            <TwitterCircleFilled />
            <AppstoreFilled />
          </div>
          <p>Copyright &copy; 2022. Allrights</p>
        </div>
      </Footer>
    </div>
  );
};

export default Register;
