import TodoList from "../TodoList/TodoList";
import ListUsers from "../Users/ListUsers";
import ViewProfile from "../ViewProfile/ViewProfile";

const Contents = ({ option }) => {
  console.log(option);
  return (
    <>
      {option == 1 ? (
        <TodoList />
      ) : option == 2 ? (
        <ListUsers />
      ) : option == 3 ? (
        <ViewProfile />
      ) : (
        <></>
      )}
    </>
  );
};

export default Contents;
