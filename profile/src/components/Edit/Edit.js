import "./Edit.css";
import React from "react";
import { editUser, getUserById } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	numberValidator,
	emailValidator,
	requireValue,
	requireUncontainNumber,
} from "./Validation";
import "antd/dist/antd.css";
import {
	Form,
	Input,
	Button,
	Select,
	InputNumber,
} from "antd";

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


	const gender = user.gender;
	if (gender === "Male") {
		user.avatar =
			"https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
	}
	if (gender === "Female") {
		user.avatar =
			"https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";
	}


	form.setFieldsValue({
		first_name: user.first_name,
		last_name: user.last_name,
		age: user.age,
		address: user.address,
		email: user.email,
		phone_number: user.phone_number,
		gender: user.gender
	})


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
			password: user.password
		}
		editUser(user.id, userEdit).then(() => {
			navigate(`/account`);
		});
	};


	const [componentSize, setComponentSize] = useState("default");

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

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
									span: 8
								}}
								wrapperCol={{
									span: 24
								}}
								layout="horizontal"
								initialValues={{
									size: componentSize
								}}
								onValuesChange={onFormLayoutChange}
								size={componentSize}
							>
								<Form.Item
									label="First Name:"
									name="first_name"
									rules={[
										{ required: true, message: "Please input your name!" },
									]}
								>
									<Input
										className="input--style-4"
									/>
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
									<Input placeholder='address' className="input--style-4" />
								</Form.Item>

								<Form.Item
									label="Email:  "
									name="email"
									rules={[
										{ required: true, message: "Please input your email!", type: "email" },
									]}
								>
									<Input
										style={{
											color: 'black',
											background: 'rgb(199, 194, 194)'
										}}
										disabled
										className="input--style-4" />
									{/* <span className="text-danger">
                    {requireValue(user.age)}
                  </span> */}
								</Form.Item>

								<Form.Item
									label="Phone Number:"
									name="phone_number"
									rules={[
										{ required: true, message: "Please input your phone number!" },
									]}
								>
									<Input className="input--style-4" />
								</Form.Item>

								<Form.Item
									label="Gender:"
									required
									name="gender"
								>
									<Select className="select" allowClear>
										<Select.Option value="Male">Male</Select.Option>
										<Select.Option value="Female">Female</Select.Option>
									</Select>
								</Form.Item>
								<div className="p-t-15">
									<Button
										className="btn-edit"
										type="primary"
										htmlType="submit"
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
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
