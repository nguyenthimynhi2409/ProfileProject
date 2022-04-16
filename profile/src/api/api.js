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
