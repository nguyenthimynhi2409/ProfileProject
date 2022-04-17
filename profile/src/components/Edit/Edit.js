import "./Edit.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = (editUser) => {

    editUser = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleSubmitForm = (e) => {

        e.preventDefault();

        const myForm = new FormData();
        let user = {};
        myForm.set("firstName", firstName);
        myForm.set("lastName", lastName);
        myForm.set("email", email);
        myForm.set("age", age);
        myForm.set("gender", gender);
        myForm.set("phoneNumber", phone);
        myForm.set("avatar", avatar);
        for (const [key, value] of myForm) {
            user[key] = value;
        }
        editUsser(user);
        navigate("/view");
    };

    return (
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div class="wrapper wrapper--w680">
                <div class="card card-4">
                    <div class="card-body">
                        <h2 class="title">Update User Form</h2>
                        <form method="POST">
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">First Name</label>
                                        <input 
                                            class="input--style-4" 
                                            type="text" 
                                            name="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Last Name</label>
                                        <input 
                                            class="input--style-4" 
                                            type="text" 
                                            name="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Age</label>
                                        <div class="input-group-icon">
                                            <input 
                                                class="input--style-4" 
                                                type="text" 
                                                name="age"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Gender</label>
                                        <div class="p-t-10">
                                            <label class="radio-container m-r-45">Male
                                                <input type="radio" checked="checked" name="gender"/>
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container">Female
                                                <input type="radio" name="gender"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Email</label>
                                        <input 
                                            class="input--style-4" 
                                            type="email" 
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Phone Number</label>
                                        <input 
                                            class="input--style-4" 
                                            type="text" 
                                            name="phoneNumber"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <label class="label">Choose Avatar</label>
                            </div>
                            <div class="p-t-15">
                                <button class="btn btn--radius-2 btn--blue" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
