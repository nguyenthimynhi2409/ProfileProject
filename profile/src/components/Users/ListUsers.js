import { Table, Tag, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getAllAccount } from '../../api/api';
import "./ListUsers.css";


const ListUsers = () => {

  const [listUser, setUser] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getAllAccount();
    setUser(response.data);
  };
  console.log(listUser);

  return (
    <>
      
    </>
  );
};

export default ListUsers;
