import React, { useState } from "react";
import TagDialog from "./TagDialog";
import { Tag } from "@/utils/types";

interface ListOfTagsProps {
  tags: Tag[];
}

const ListofTags = (tagList: ListOfTagsProps) => {
  const { tags } = tagList;

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [tag, setTag] = useState({
    id: "",
    name: "",
    color: "",
  });

  return (
    <>
      <div className="">
        <div className="flex mb-5">
          <p className="font-bold text-lg flex-grow self-center">
            List of Tags
          </p>
          <button
            className="rounded-md bg-gray-900 text-white text-sm pt-3 pb-3 pl-6 pr-6"
            onClick={() => {
              setShow(true);
              setType("Add");
            }}
          >
            Add Tag
          </button>
        </div>
        <table className="expense_table table-auto w-full bg-gray-100 rounded-md shadow">
          <thead className="expense_thead">
            <tr>
              <th className="text-sm p-5">Name</th>
              <th className="text-sm p-5">Color</th>
              <th className="text-sm p-5">Edit</th>
              <th className="text-sm p-5">Delete</th>
            </tr>
          </thead>

          {tags && tags.length > 0 ? (
            <tbody>
              {tags.map((tag: Tag) => (
                <tr className="" key={tag._id}>
                  <td className="text-sm text-center p-3">{tag.name}</td>
                  <td className="text-sm text-center p-3">
                    <span
                      className={`material-symbols-outlined text-[${tag.color}]`}
                    >
                      circle
                    </span>
                  </td>
                  <td>
                    <button
                      className="w-full"
                      onClick={() => {
                        setShow(true);
                        setType("Edit");
                        setTag({
                          id: tag._id,
                          name: tag.name,
                          color: tag.color,
                        });
                      }}
                    >
                      <span className="material-symbols-outlined text-center">
                        edit
                      </span>
                    </button>
                  </td>
                  <td>
                    <button
                      className="w-full"
                      onClick={() => {
                        setShow(true);
                        setType("Delete");
                        setTag({
                          id: tag._id,
                          name: tag.name,
                          color: tag.color,
                        });
                      }}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <></>
          )}
        </table>
        {tags && tags.length === 0 ? (
          <p className="text-sm text-center w-full p-5">No tags added...</p>
        ) : (
          ""
        )}
      </div>
      <TagDialog
        show={show}
        type={type}
        setShow={() => {
          setShow(!show);
        }}
        tagItem={type === "Edit" || type === "Delete" ? tag : undefined}
      />
    </>
  );
};

export default ListofTags;
