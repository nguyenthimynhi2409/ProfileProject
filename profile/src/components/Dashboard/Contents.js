import { useContext, useState } from "react";
import Edit from "../Edit/Edit";
import TodoList from "../TodoList/TodoList";
import CreateUser from "../Users/CreateUser";
import ListUsers from "../Users/ListUsers";
import ViewProfile from "../ViewProfile/ViewProfile";

// const Contents = ({ option }) => {
const Contents = () => {
  const [option] = useContext(Option);

  return (
    <>
      {option == 1 ? (
        <TodoList />
      ) : option == 2 ? (
        <ListUsers />
      ) : option == 3 ? (
        <ViewProfile />
      ) : option == 4 ? (
        <Edit />
      ) : option == 5 ? (
        <CreateUser />
      ) : (
        <></>
      )}
    </>
  );
};

export default Contents;
