import React from "react";

interface TagIconProps {
  handleColorChange: (shade: string) => void;
}

const TagIcons = ({ handleColorChange }: TagIconProps) => {
  return (
    <>
      <span
        className={`material-symbols-outlined text-[#d32f2f] cursor-pointer`}
        onClick={() => {
          handleColorChange("#d32f2f");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#7b1fa2] cursor-pointer`}
        onClick={() => {
          handleColorChange("#7b1fa2");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#fbc02d] cursor-pointer`}
        onClick={() => {
          handleColorChange("#fbc02d");
        }}
      >
        circle
      </span>
    </>
  );
};

export default TagIcons;
