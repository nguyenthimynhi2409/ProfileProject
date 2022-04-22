import "./Header.css";

const Header = ({u}) => {

  return (
    <div className="header">
      <div className="user">
        <span className="name-user">{u.first_name} {u.last_name}</span>
        <div className="avatar">
          <img src="http://cdn.onlinewebfonts.com/svg/img_411076.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
