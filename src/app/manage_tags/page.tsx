"use client";

//REACT IMPORTS
import React, { useEffect } from "react";

//COMPONENTS
import ListofTags from "@/components/tags/ListofTags";

//LIB
import { useTagQuery } from "@/utils/hooks/tag"
import { TagType } from "@/utils/types";

const ManageTags = () => {
  const { data } = useTagQuery();

  return (
    <>
      <div className="module_title">Manage Tags</div>
      <div className="module_content">
        <section className="">
          <div className="">
            <ListofTags tags={data as TagType[]} />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageTags;
