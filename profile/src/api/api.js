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

export const editUser = async (id, user) => {
  try {
    return await axios.put(`/users/${id}`,user);
  } catch (error) {
    console.log(error);
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
  return await axios.get(`/users`);
};
