import "./ViewProfile.css";
import { getUserById } from "../../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "antd";

const ViewProfile = () => {
  const navigate = useNavigate();

  // get id user
  const id = JSON.parse(localStorage.getItem("id"));
  if (id == undefined) {
    localStorage.clear();
    navigate(`/`);
  }

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  return (
    <>
      <div className="profile">
        <figure>
          <img src={user.avatar} alt="" />
        </figure>
        <header>
          <h1>
            {user.last_name} {user.first_name}
            <small>Link fb, twiter here</small>
          </h1>
        </header>
        <main>
          <dl>
            <dt>Full name</dt>
            <dd>
              {user.last_name} {user.first_name}
            </dd>
            <dt>Age</dt>
            {user && user.age ? <dd>{user.age}</dd> : <dd>-</dd>}
            <dt>Address</dt>
            {user && user.address ? <dd>{user.address}</dd> : <dd>-</dd>}
            <dt>Gender</dt>
            <dd>{user.gender}</dd>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Phone Number</dt>
            <dd>{user.phone_number}</dd>
          </dl>
        </main>
        <div>
          <Button
            className="btn-edit"
            type="primary"
            onClick={() => {
              navigate(`/account/update`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
