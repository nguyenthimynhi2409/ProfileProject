import { Table, Space, Button, Form, Input, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteTodo,
  deleteTodosByIdUser,
  getAllAccount,
  getUserById,
} from "../../api/api";
import "./ListUsers.css";
import { deleteUser } from "../../api/api";

const ListUsers = () => {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const [users, setUsers] = useState([]);
  const { Column, ColumnGroup } = Table;
  const [user, setUser] = useState();
  // get id user
  const id = JSON.parse(localStorage.getItem("id"));
  if (id == undefined) {
    localStorage.clear();
    navigate(`/`);
  }

  useEffect(() => {
    getAllUsers();
    getInforUser();
  }, []);

  const getInforUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };
  const getAllUsers = async () => {
    const response = await getAllAccount();
    setListUser(response.data);
    setUsers(response.data);
  };

  const onDeleteUser = async (id) => {
    setUsers(users.filter((u) => u.id !== id));
    await deleteUser(id);
    await deleteTodosByIdUser(id);
  };

  const onSearchUser = async (value) => {
    const keyword = value.keyword.toLowerCase();
    if (keyword == "") setUsers(listUser);
    const data = listUser.filter((user) =>
      user.first_name.toLowerCase().includes(keyword)
    );
    setUsers(data);
  };

  return (
    <>
      <div className="list-user">
        <Form className="form-atnd" onFinish={onSearchUser}>
          <div className="search-form">
            <Form.Item name="keyword">
              <Input placeholder="Search Name" type="text" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </div>
          <div>
            <Button
              className={user && user.role !== "manager" ? "btn-display" : ""}
              onClick={() => {
                navigate(`/user/new`);
              }}
            >
              Create Account
            </Button>
          </div>
        </Form>
        <Table className="table-list" dataSource={users}>
          <Column title="Id" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="first_name" key="first_name" />
          <Column title="Last Name" dataIndex="last_name" key="last_name" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Gender" dataIndex="gender" key="gender" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Phone Number"
            dataIndex="phone_number"
            key="phone_number"
          />
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <Space>
                <Button
                  className={
                    user && user.role !== "manager" ? "btn-display" : ""
                  }
                  type="primary"
                  onClick={() => {
                    navigate(`/user/${record.id}`);
                  }}
                  disabled={user && user.role == "user"}
                >
                  Edit
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    navigate(`/todo/${record.id}`);
                  }}
                >
                  TodoList
                </Button>
                <Popconfirm
                  title="Are you sure？"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => onDeleteUser(record.id)}
                >
                  <Button
                    className={
                      user && user.role !== "manager" ? "btn-display" : ""
                    }
                    type="danger"
                  >
                    <a>Delete</a>
                  </Button>
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default ListUsers;
