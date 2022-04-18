import "./Edit.css";
import React from "react";
import { editUser, getUserById } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Edit = (navigate) => {
    navigate = useNavigate();
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getInforUser();
    },[]);
    const getInforUser = async() => {
        const response = await getUserById(1)
        setUser(response.data);
    }

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }
    console.log(user);
    const edit = async () => {
        await editUser(id, user);
        
    }
    
    return (
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Update User Form</h2>
                        <form onSubmit={edit}>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">First Name</label>
                                        <input 
                                            className="input--style-4" 
                                            type="text" 
                                            name="first_name"
                                            value={user.first_name}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="input-group">
                                        <label className="label">Last Name</label>
                                        <input 
                                            className="input--style-4" 
                                            type="text" 
                                            name="last_name"
                                            value={user.last_name}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Age</label>
                                        <div className="input-group-icon">
                                            <input 
                                                className="input--style-4" 
                                                type="text" 
                                                name="age"
                                                value={user.age}
                                                onChange={(e) => onValueChange(e)}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Gender</label>
                                        <div className="p-t-10">
                                            <label className="radio-container m-r-45">Male
                                                <input type="radio" checked="checked" name="gender"/>
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="radio-container">Female
                                                <input type="radio" name="gender"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input 
                                            className="input--style-4" 
                                            type="email" 
                                            name="email"
                                            value={user.email}
                                            onChange={(e) => onValueChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input 
                                            className="input--style-4" 
                                            type="text" 
                                            name="phone_number"
                                            value={user.phone_number}
                                            onChange={(e) => onValueChange(e)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="label">Choose Avatar</label>
                            </div>
                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" onClick={() => navigate(`/view/${id}`)}  type="submit" >Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
