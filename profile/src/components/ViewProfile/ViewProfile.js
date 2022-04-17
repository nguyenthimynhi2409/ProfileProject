
import "./ViewProfile.css"

const ViewProfile = () => {
  return (
    <div class="profile">
      <figure>
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" alt="" />
      </figure>
      <header>
        <h1>Username
          <small>Link fb, twiter here</small></h1>
      </header>
      <main>
        <dl>
          <dt>Full name</dt>
            <dd></dd>
          <dt>Age</dt>
            <dd></dd>
          <dt>Address</dt>
            <dd></dd>
          <dt>Gender</dt>
            <dd></dd>
          <dt>Phone Number</dt>
            <dd></dd>

        </dl>
      </main>
      <div className="btn-edit">
          <button>Edit</button>
      </div>
    </div>
  )
};

export default ViewProfile;