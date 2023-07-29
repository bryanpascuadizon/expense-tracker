//REACT IMPORTS
import React, { useEffect, useState } from "react";

//COMPONENTS
import TagIcons from "./TagIcons";

//UTILS
import { useTagMutation, useTagQuery } from "@/utils/hooks/tag";
import { ADD, DELETE, EDIT } from "@/utils/constants";
import { TagType } from "@/utils/types";

interface TagDialogProps {
  tagItem?: {
    id: string;
    name: string;
    color: string;
  };
  show: boolean;
  type: string;
  setShow: (show: boolean) => void;
}

const TagDialog = ({ tagItem, show, type, setShow }: TagDialogProps) => {
  const [tags, setTags] = useState({
    id: "",
    name: "",
    color: "#f44336",
  });
  const { id, name, color } = tags;
  const { mutate } = useTagMutation();
  const { refetch } = useTagQuery();

  useEffect(() => {
    if (type === "Edit" || type === "Delete") {
      setTags({
        id: tagItem ? tagItem.id : "",
        name: tagItem ? tagItem.name : "",
        color: tagItem ? tagItem?.color : "",
      });
    }
  }, [tagItem]);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setTags({
      ...tags,
      [name]: value,
    });
  };

  const handleColorChange = (shade: string) => {
    setTags({
      ...tags,
      color: shade,
    });
  };

  const handleOnCancel = () => {
    setTags({
      id: "",
      name: "",
      color: "#f44336",
    });
    setShow(false);
  };

  const handleEditSubmit = async () => {
    await mutate(
      {
        type: EDIT,
        tag: {
          _id: tags.id,
          name: tags.name,
          color: tags.color,
          user_id: "",
        },
      },
      {
        onSuccess: () => {
          setTags({
            id: "",
            name: "",
            color: "#f44336",
          });
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Edit Tag: ", error);
        },
      }
    );
  };

  const handleAddSubmit = async () => {
    let newTag: TagType = {
      _id: "",
      name: tags.name,
      color: tags.color,
      user_id: "",
    };
    await mutate(
      {
        type: ADD,
        tag: newTag,
      },
      {
        onSuccess: () => {
          setTags({
            id: "",
            name: "",
            color: "#f44336",
          });
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Post Tag: ", error);
        },
      }
    );
  };

  const handleDeleteSubmit = async () => {
    await mutate(
      {
        type: DELETE,
        tag: {
          _id: tags.id,
          name: tags.name,
          color: tags.color,
          user_id: "",
        },
      },
      {
        onSuccess: () => {
          setTags({
            id: "",
            name: "",
            color: "#f44336",
          });
          setShow(false);
          refetch();
        },
        onError: (error) => {
          console.error("Delete Tag: ", error);
        },
      }
    );
  };

  return show ? (
    <div className="fixed top-0 left-0 bottom-0 bg-gray-400 bg-opacity-50 z-10 w-full h-full overflow-auto">
      {/* Modal Content */}
      <div className="rounded-md bg-gray-100 shadow m-auto mt-20 max-w-md">
        {/* Modal Title */}
        <div className="p-5 border-b border-b-gray-200">
          <p className="text-xl">
            {type === "Add"
              ? "Add Tag"
              : type === "Edit"
              ? "Edit Tag"
              : "Are you sure you want to delete this tag?"}
          </p>
        </div>
        {/* Modal Body */}
        <div className="p-5">
          {type !== "Delete" ? <p className={`text-md mb-3`}>Name:</p> : ""}

          {type === "Delete" ? (
            <p className={`text-md mb-3`}>
              Name:{" "}
              <span className={`text-md mb-3 text-[${color}]`}>{name}</span>
            </p>
          ) : (
            <input
              type="text"
              name="name"
              value={name}
              placeholder="type here..."
              className="mb-3 rounded-md text-sm p-3 w-full border border-gray-200"
              onChange={handleOnChange}
            />
          )}
          {type !== "Delete" ? (
            <>
              <span className="text-md">Color: </span>
              <span className={`text-[${color}] text-md`}>{`${name}`}</span>
              <div className="flex mt-3 mb-5">
                <TagIcons handleColorChange={handleColorChange} />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        {/* Modal Footer */}
        <div className="flex flex-row-reverse p-5 border-t border-t-gray-200">
          <button
            className="text-sm pt-3 pb-3 pl-5 pr-5 bg-grey-900 rounded-md text-white"
            onClick={
              type === "Add"
                ? handleAddSubmit
                : type === "Edit"
                ? handleEditSubmit
                : handleDeleteSubmit
            }
          >
            {type === "Add" ? "Add" : type === "Edit" ? "Edit" : "Delete"} Tag
          </button>
          <button
            className="text-sm pt-3 pb-3 pl-5 pr-5 bg-grey-300 rounded-md text-black mr-3"
            onClick={handleOnCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TagDialog;
