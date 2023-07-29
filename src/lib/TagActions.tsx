import axios from "axios";
import { getUserId } from "./Auth";
import { TagType } from "@/utils/types";

const userId = getUserId();

/* Get all tags of the user */
export const fetchUserTags = async () => {
  const tagList = await axios.get(`/api/tags/${userId}`);

  if (tagList.status !== 200) {
    throw new Error(tagList.statusText);
  }
  return tagList.data as TagType[];
};

/* Post a tag added by the user */
export const addUserTag = async (tag: TagType) => {
  const postRequest = await axios.post(`/api/tags/${userId}`, {
    tag,
  });

  if (postRequest.status !== 200) {
    throw new Error(postRequest.statusText);
  }

  return postRequest;
};

/*  Updates a tag edited by the user */
export const updateUserTag = async (tag: TagType) => {
  const patchRequest = await axios.patch(`/api/tags/${tag._id}`, {
    tag,
  });

  if (patchRequest.status !== 200) {
    throw new Error(patchRequest.statusText);
  }

  return patchRequest;
};

/* Deletes a tag chosen by the user  */
export const deleteUserTag = async (tag: TagType) => {
  const deleteRequest = await axios.delete(`/api/tags/${tag._id}`);

  if (deleteRequest.status !== 200) {
    throw new Error(deleteRequest.statusText);
  }

  return deleteRequest;
};
