import { useCallback, useState } from "react";
import Edit from "../Edit/Edit";
import TodoList from "../TodoList/TodoList";
import CreateUser from "../Users/CreateUser";
import ListUsers from "../Users/ListUsers";
import ViewProfile from "../ViewProfile/ViewProfile";

const Contents = (props) => {
  const handleOptionChange = useCallback(
    (o) => {
      props.onOptionChange(o);
    },
    [props.onOptionChange]
  );
  
  return (
    <>
      {props.option == 1 ? (
        <TodoList />
      ) : props.option == 2 ? (
        <ListUsers option={props.option} onOptionChange={handleOptionChange} />
      ) : props.option == 3 ? (
        <ViewProfile
          option={props.option}
          onOptionChange={handleOptionChange}
        />
      ) : props.option == 4 ? (
        <Edit option={props.option} onOptionChange={handleOptionChange} />
      ) : props.option == 5 ? (
        <CreateUser option={props.option} onOptionChange={handleOptionChange} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Contents;
