import axios from "axios";

export const getUserTagList = async (userId: string | null | undefined) => {
  try {
    const tagList = await axios.get(`/api/tags/${userId}`);

    if (tagList.status !== 200) {
      throw new Error("Failed to get Tag List of the user");
    }

    return tagList.data;
  } catch (error) {
    console.error("Get User Tags Error: ", error);
  }
};
