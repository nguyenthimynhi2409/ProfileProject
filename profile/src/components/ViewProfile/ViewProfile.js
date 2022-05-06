import "./ViewProfile.css";
import { getUserById } from "../../api/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const ViewProfile = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  // get data user
  // const user = JSON.parse(localStorage.getItem("user"));

  if (user.address === "") {
    user.address = "-";
  }

  if (user.address === "") user.address = "-";

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
            <dd>{user.age}</dd>
            <dt>Address</dt>
            <dd>{user.address}</dd>
            <dt>Gender</dt>
            <dd>{user.gender}</dd>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Phone Number </dt>
            <dd>{user.phone_number}</dd>
          </dl>
        </main>
        <div className="btn-edit">
          {/* <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button> */}
          <button
            onClick={() => {
              props.onOptionChange(4);
              navigate(`/account/update`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
