import { Table, Tag, Space, Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAccount } from "../../api/api";
import "./ListUsers.css";
import { deleteUser } from "../../api/api";

const ListUsers = (props) => {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const { Column, ColumnGroup } = Table;
 
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getAllAccount();
    setListUser(response.data);
  };
  
  const onDeleteUser = (id) => {
    deleteUser(id).then(()=>{
      window.location.reload();
    });

  }

  return (
    <>
      <div className="list-user">
        <Form className="form-atnd">
          <div className="search-form">
            <Input placeholder="Search Name" type="text" />
            <Button>Search</Button>
          </div>
          <div>
            <Button
              onClick={() => {
                props.onOptionChange(5);
                navigate(`/user/new`);
              }}
            >
              Create Account
            </Button>
          </div>
        </Form>
        <Table className="table-list" dataSource={listUser}>
          <Column title="Id" dataIndex="id" key="id"/>
          {/* <ColumnGroup title="Name"> */}
         
          <Column title="First Name" dataIndex="first_name" key="first_name" />
          <Column title="Last Name" dataIndex="last_name" key="last_name" />
          {/* </ColumnGroup> */}
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
                  type="primary"
                  onClick={() => {
                    props.onOptionChange(6);
                    navigate(`/user/${record.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    props.onOptionChange(7);
                    navigate(`/user/todo/${record.id}`);
                  }}
                >
                  TodoList
                </Button>
                <Button type="danger" onClick={() => onDeleteUser(record.id)}>Delete</Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </>
  );
};

export default ListUsers;
