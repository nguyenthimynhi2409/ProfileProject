import "./Edit.css";
import React, { useContext } from "react";
import { editUser, getUserById } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import {
  numberValidator,
  emailValidator,
  requireValue,
  requireUncontainNumber,
} from "./Validation";

const Edit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  // // const [first_name, last_name, email, age, gender, phone_number, avatar] = user;
  // // console.log(auth);
  // const { id } = useParams();

  // get id user
  const id = JSON.parse(localStorage.getItem("user")).id;
  
  useEffect(() => {
    getInforUser();
  }, []);

  const getInforUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user);
  const gender = user.gender;
  // console.log(gender);
  if (gender === "Male") {
    user.avatar =
      "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
  }
  if (gender === "Female") {
    user.avatar =
      "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";
  }

  const [, setOption] = useContext(Option);

  const edit = (e) => {
    e.preventDefault();
    if (requireValue(user.address)) {
    }
    // editUser(id, user).then(() => {
    editUser(user.id, user).then(() => {
      // navigate(`/view/${id}`);
      setOption(3);
      navigate(`/account`);
    });
  };

  return (
    <>
      
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">My Account</h2>
              <form onSubmit={edit}>
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
                  {/* <div className="col-6">
                    <div className="input-group">
                      <label className="label">Age</label>
                      <div className="input-group-icon">
                        <input
                          required
                          className="input--style-4"
                          type="text"
                          name="age"
                          value={user.age}
                          onChange={(e) => onValueChange(e)}
                        />
                        <span className="text-danger">
                          {requireValue(user.age)} {numberValidator(user.age)}
                        </span>
                      </div>
                    </div>
                  </div> */}
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
                  <button className="btn-edit" type="submit">
                    Update
                  </button>
                  <button
                    className="btn-edit cancel"
                    // onClick={() => navigate(-1)}
                    onClick={() => {
                      setOption(3);
                      navigate("/account");}}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
