import axios from "axios";

export const register = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post(`/users`, data, config);
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
    await axios.put(`/users/${id}`, data, config);
  } catch (err) {
    console.log(err);
  }
}

export const getUserById = async (id) => {
  try {
    id = id || '';
    return await axios.get(`/users/${id}`);
  } catch (error) {
    console.log(error);
  }
}
export const getAllAccount = async () => {
  console.log("i");
  return await axios.get(`/users`);
};

// export const login = async(email) => {
//   await axios.get(`/users`).then((res) => {
//     if(res.data.email === email)
//       return user
//   });
//   return null;
// }

export const login = async (email, password) => {
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
