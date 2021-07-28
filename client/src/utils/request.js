import axios from "axios";

export const getUsers = async () => {
  try {
    const allUsersFromDb = await axios.get("http://localhost:4000/api/user");
    // jei gavom duomenis
    console.log("inside Try");
    if (Array.isArray(allUsersFromDb.data) && allUsersFromDb.data.length) {
      // nustatom state i tai ka gavom
      return allUsersFromDb.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateUserSend = async (id, updatedDetails) => {
  try {
    const updateResult = await axios.put(
      "http://localhost:4000/api/user/update/" + id,
      updatedDetails
    );
    if (updateResult.data) return true;
  } catch (error) {
    console.error(error);
  }
};

export const createUserSend = async (dataToCreateNewUser) => {
  try {
    const createResult = await axios.post(
      "http://localhost:4000/api/user/new",
      dataToCreateNewUser
    );
    return createResult.data ? true : false;
  } catch (error) {
    console.error(error);
  }
};
export const deleteUserSend = async (id) => {
  try {
    const deleteResult = await axios.delete(
      "http://localhost:4000/api/user/delete/" + id
    );

    if (deleteResult.data) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};
