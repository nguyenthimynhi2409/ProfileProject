import axios from "axios";


// Find record by properties
async function getOneBy(filters) {
  const records = await getAllAccount();
  for (let record of records.data) {
    let found = true;
    for (let key in filters) {
      if (record[key] !== filters[key]) {
        found = false;
      }
    }
    if (found) return record;
  }
}

export const checkEmailExist = async (email) => {
  if ((await getOneBy({ email })) == undefined) {
    return false;
  } else return await getOneBy({ email });
};

export const login = async (email, password) => {
  try {
    const data = await checkEmailExist(email);
    if (data.password == password) {
      if(localStorage.getItem("user") === null)
        localStorage.setItem("user",JSON.stringify(data));
      return data;
    }
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