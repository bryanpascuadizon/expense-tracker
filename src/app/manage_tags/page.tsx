"use client";

import ListofTags from "@/components/tags/ListofTags";
import { getUserId } from "@/lib/LoginActions";
import { getTagList } from "@/lib/TagActions";
import { populateTags } from "@/utils/reducers/tagReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ManageTags = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTagList = async () => {
      const userId: string | null | undefined = getUserId();
      const tagList = await getTagList(userId);
      dispatch(populateTags(tagList));
    };

    fetchTagList();
  }, []);
  return (
    <>
      <div className="module_title">Manage Tags</div>
      <div className="module_content">
        <section className="">
          {/* <div className="expense_section xxl:col-span-1 xxs:col-span-2">
            <AddTags />
          </div> */}
          <div className="">
            <ListofTags />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageTags;
