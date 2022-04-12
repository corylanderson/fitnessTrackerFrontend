// You can choose to import all your functions, and re-export them here

const base_url = "https://fitnesstrac-kr.herokuapp.com/api";

export const fetchRegisterUser = async (username, password) => {
  try {
    const response = await fetch(`${base_url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLogin = async (username, password) => {
  try {
    const response = await fetch(`${base_url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const response = await fetch(`${base_url}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllRoutines = async (username) => {
  try {
    const response = await fetch(`${base_url}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
