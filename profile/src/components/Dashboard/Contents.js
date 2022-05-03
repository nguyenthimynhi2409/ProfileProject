import TodoList from "../TodoList/TodoList";
import ListUsers from "../Users/ListUsers";

const Contents = ({ option }) => {
  console.log(option);
  return (
    <>{option == 1 ? <TodoList /> : option == 2 ? <ListUsers /> : <></>}</>
  );
};

export default Contents;
