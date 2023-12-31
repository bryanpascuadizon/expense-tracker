//REACT IMPORTS
import { UseMutationOptions, useMutation, useQuery } from "react-query";

//UTILS
import { TagType } from "../types";
import { ADD, EDIT, DELETE } from "../constants";

//LIB
import {
  addUserTag,
  updateUserTag,
  deleteUserTag,
  fetchUserTags,
} from "@/lib/TagActions";

/* Type for Tag Mutation */
type TagMutationVariable = {
  type: string;
  tag: TagType;
};

/* Custom Hook for Tag Mutation */
export const useTagMutation = (
  options?: UseMutationOptions<TagType, Error, TagMutationVariable>
) => {
  const mutation = useMutation(async ({ type, tag }: TagMutationVariable) => {
    switch (type) {
      case ADD:
        return addUserTag(tag);
      case EDIT:
        return updateUserTag(tag);
      case DELETE:
        return deleteUserTag(tag);
    }
  });

  return mutation;
};

/* Custom Hook for fetching user tag list */
export const useTagQuery = () => {
  return useQuery<TagType[], Error>({
    queryKey: ["tags"],
    queryFn: fetchUserTags,
  });
};
