import { useNavigate } from "react-router-dom";
import {
	validateAge,
	validateEmail,
	validateGender,
	validatePassword,
	validatePhone,
} from "../Register/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../api/api";
import {
	Form,
	Input,
	Button,
	Select,
	InputNumber,
} from "antd";
import { useState } from "react";

const CreateUser = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const create = async (value) => {
		const first_name = value.first_name;
		const last_name = value.last_name;
		const email = value.email;
		const age = value.age;
		const gender = value.gender;
		const password = value.password;
		const confirm_password = value.confirm_password;
		const phone = value.phone_number;
		const address = value.address;
		const role = "user";
		let avatar = "";
		if (gender === "Male")
			avatar =
				"https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
		if (gender === "Female")
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
			};
			try {
				await register(account);
				navigate(`/users`);
			} catch (err) {
				toast("Server die");
			}
		}
	};
	const [componentSize, setComponentSize] = useState("default");

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};
	return (
		<div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
			<div className="wrapper wrapper--w680">
				<div className="card card-4">
					<div className="card-body">
						<h2 className="title">Create user</h2>

						<Form
							form={form}
							onFinish={create}
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
								rules={[
									{
										type: "number",
										min: 1,
										max: 150,
										required: true
									},
								]}
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
									className="input--style-4" />
							</Form.Item>

							<Form.Item
								label="Phone Number:"
								name="phone_number"
								rules={[
									{
										required: true,
										message: "Please input your phone number!",
									},
								]}
							>
								<Input
									maxLength={12} minLength={9}
									className="input--style-4" />
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

							<Form.Item
								name={"password"}
								label="Password"
								rules={[
									{ required: true, message: "Please input your password!" },
								]}
							>
								<Input.Password className="input--style-4" />
							</Form.Item>
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
								<Input.Password className="input--style-4" />
							</Form.Item>

							<div className="p-t-15">
								<Button
									className="btn-edit"
									type="primary"
									htmlType="submit"
								>
									Create
								</Button>
								<Button
									className="btn-edit"
									type="danger"
									onClick={() => navigate(`/users`)}
								>
									Cancel
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
