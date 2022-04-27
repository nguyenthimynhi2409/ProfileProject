import "./ViewProfile.css";
import { getUserById } from "../../api/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logout from "../../images/logout.png";
import Footer from "../Layout/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Layout/Header/Header";

const ViewProfile = ({ logout }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const { id } = useParams();

  const getUsers = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };
  if(user.address === "")
  { 
    user.address = "-"
  }
  return (
    <>
      <Header user = {user} />
      <div className="container-logout">
        <button
          className="logout"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <img src={Logout} />
        </button>
      </div>

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
          <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProfile;
