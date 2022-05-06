import { useNavigate } from "react-router-dom";

const CreateUser = (props) => {
  const navigate = useNavigate();

  const create = () => {
    props.onOptionchange(2);
    navigate(`/users`);
  };

  return (
    // <div className="create-user">
    //   <h1>Create User</h1>
    //   <button
    //     className="create"
    //     onClick={() => {
    //       props.onOptionchange(2);
    //       navigate(`/users`);
    //     }}
    //   >
    //     create
    //   </button>
    // </div>
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Create user</h2>
            <form onSubmit={create}>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">First Name</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      name="first_name"
                    />
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
                    />
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
                    />
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
                    />
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
                      required
                    />
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
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label className="label">Gender</label>
                <div className="select">
                  <select name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <label className="label">Role</label>
                <div className="select">
                  <select name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
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
                  onClick={() => {
                    props.handleOptionChange(3);
                    navigate("/account");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
