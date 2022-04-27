import "./Header.css";

const Header = ({user}) => {
  return (
    <div className="header">
      <div className="user">
        <span className="name-user">{user.first_name} {user.last_name}</span>
        <div className="avatar">
          <img src={user.avatar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
