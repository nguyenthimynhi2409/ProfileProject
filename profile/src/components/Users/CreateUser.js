import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [, setOption] = useContext(Option);
  const navigate = useNavigate();
  return (
    <>
      <h1>Create User</h1>
      <button onClick={() => {
        setOption(2);
        navigate(`/users`);
      }}>create</button>
    </>
  );
};

export default CreateUser;
