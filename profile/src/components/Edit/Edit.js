import "./Edit.css";
import React from "react";
import { editUser, getUserById } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, InputNumber } from "antd";
import { validatePhone } from "../Register/validation";

const Edit = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // get id user
  const id = JSON.parse(localStorage.getItem("id"));
  if (id == undefined) {
    localStorage.clear();
    navigate(`/`);
  }

  useEffect(() => {
    getInforUser();
  }, []);

  const getInforUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  //   const gender = user.gender;
  //   if (gender === "Male") {
  //     user.avatar =
  //       "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
  //   }
  //   if (gender === "Female") {
  //     user.avatar =
  //       "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";
  //   }

  form.setFieldsValue({
    first_name: user.first_name,
    last_name: user.last_name,
    age: user.age,
    address: user.address,
    email: user.email,
    phone_number: user.phone_number,
    gender: user.gender,
  });

  const edit = (value) => {
    const first_name = value.first_name;
    const last_name = value.last_name;
    const email = value.email;
    const age = value.age;
    const gender = value.gender;
    const phone = value.phone_number;
    const role = user.role;
    let avatar = "";
    const address = value.address;
    if (gender == "Male")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
    if (gender == "Female")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";

    const userEdit = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      age: age,
      address: address,
      phone_number: phone,
      role: role,
      avatar: avatar,
      gender: gender,
      password: user.password,
    };
    console.log(userEdit.phone_number);

    if (validatePhone(userEdit.phone_number))
      editUser(user.id, userEdit).then(() => {
        navigate(`/account`);
      });
  };

  // const [componentSize, setComponentSize] = useState("default");

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };

  return (
    <>
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">My Account</h2>

              <Form
                form={form}
                onFinish={edit}
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 24,
                }}
                layout="horizontal"
                // initialValues={{
                //   size: componentSize,
                // }}
                // onValuesChange={onFormLayoutChange}
                // size={componentSize}
              >
                <Form.Item
                  label="First Name:"
                  name="first_name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input className="input--style-4" />
                </Form.Item>

                <Form.Item
                  label="Last Name:  "
                  required
                  name="last_name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                  style={{}}
                >
                  <Input className="input--style-4" />
                </Form.Item>
                <Form.Item
                  label="Age:  "
                  required
                  rules={[
                    {
                      type: "number",
                      min: 1,
                      max: 150,
                      required: true,
                    },
                  ]}
                  name="age"
                  style={{}}
                >
                  <InputNumber className="input--style-4" />
                </Form.Item>
                <Form.Item
                  label="Address:"
                  name="address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input placeholder="address" className="input--style-4" />
                </Form.Item>

                <Form.Item
                  label="Email:  "
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                      type: "email",
                    },
                  ]}
                >
                  <Input
                    style={{
                      color: "black",
                      background: "rgb(199, 194, 194)",
                    }}
                    disabled
                    className="input--style-4"
                  />
                  {/* <span className="text-danger">
                    {requireValue(user.age)}
                  </span> */}
                </Form.Item>

                <Form.Item
                  label="Phone Number:"
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      // type: "number",
                      // max: 10,
                      // message: "Please enter your phone number!",
                    },
                  ]}
                >
                  <Input className="input--style-4" />
                </Form.Item>

                <Form.Item
                  label="Gender:"
                  required
                  name="gender"
                  rules={[{ required: true, message: "Please select gender" }]}
                >
                  <Select className="select">
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                  </Select>
                </Form.Item>
                <div className="p-t-15">
                  <Button className="btn-edit" type="primary" htmlType="submit">
                    Update
                  </Button>
                  <Button
                    className="btn-edit"
                    type="danger"
                    onClick={() => {
                      navigate("/account");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>

              {/* <form >
                <div className="row row-space">
                  <div className="col-6">
                    <div className="input-group">
                      <label className="label">First Name</label>
                      <input
                        required
                        className="input--style-4"
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {requireValue(user.first_name)}{" "}
                        {requireUncontainNumber(user.first_name)}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="input-group">
                      <label className="label">Last Name</label>
                      <input
                        required
                        className="input--style-4"
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {requireValue(user.last_name)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-6">
                    <div className="input-group">
                      <label className="label">Age</label>
                      <input
                        required
                        className="input--style-4"
                        type="number"
                        max={90}
                        min={1}
                        name="age"
                        value={user.age}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {requireValue(user.age)}
                      </span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="input-group">
                      <label className="label">Address</label>
                      <input
                        required
                        className="input--style-4"
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {requireValue(user.address)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-6">
                    <div className="input-group">
                      <label className="label">Email</label>
                      <input
                        readOnly
                        className="input--style-4"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {emailValidator(user.email)}
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <label className="label">Phone Number</label>
                      <input
                        required
                        className="input--style-4"
                        type="text"
                        maxLength={12}
                        minLength={9}
                        name="phone_number"
                        value={user.phone_number}
                        onChange={(e) => onValueChange(e)}
                      />
                      <span className="text-danger">
                        {numberValidator(user.phone_number)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <label className="label">Gender</label>
                  <div className="select">
                    <select
                      name="gender"
                      value={user.gender}
                      onChange={(e) => onValueChange(e)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div className="select-dropdown"></div>
                  </div>
                </div>
                <div className="p-t-15">
                  <Button
                    className="btn-edit"
                    type="primary"
                    onClick={edit}
                  >
                    Update
                  </Button>
                  <Button
                    className="btn-edit"
                    type="danger"
                    onClick={() => {
                      navigate("/account");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
