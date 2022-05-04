import axios from "axios";

export const login = async(email, password) => {
  const data = { email, password }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const user = await axios.post(`https://profile-json-server.herokuapp.com/login`, data, config);
    return user.data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post(`https://profile-json-server.herokuapp.com/users`, data, config);
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (id, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(`https://profile-json-server.herokuapp.com/users/${id}`, data, config);
  } catch (err) {
    console.log(err);
  }
}

export const getUserById = async (id) => {
  try {
    id = id || '';
    return await axios.get(`https://profile-json-server.herokuapp.com/users/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const getAllAccount = async () => {
  return await axios.get(`https://profile-json-server.herokuapp.com/users`);
};

export const login1 = async(e, p) => {
  const records = await axios.get(`/users`);
  const  user = {};
  console.log(records.data)
  for (let r of records.data) {
    console.log(r);
    let found = true;
    if(e == r.email && p == r.password) {
      found = false;
      user = r;
    }
    if(found === false) {
      return user;
    }
    else {
      return "Email hoac Mat khau khong chinh xac!"
    }
  }
 
};
