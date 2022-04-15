import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="user">
        <span className="name-user">Username</span>
        <div className="avatar">
          <img src="http://cdn.onlinewebfonts.com/svg/img_411076.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
