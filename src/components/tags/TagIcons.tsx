import React from "react";

interface TagIconProps {
  handleColorChange: (shade: string) => void;
}

const TagIcons = ({ handleColorChange }: TagIconProps) => {
  return (
    <>
      <span
        className={`material-symbols-outlined text-[#f44336] cursor-pointer`}
        onClick={() => {
          handleColorChange("#f44336");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#9c27b0] cursor-pointer`}
        onClick={() => {
          handleColorChange("#9c27b0");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#673ab7] cursor-pointer`}
        onClick={() => {
          handleColorChange("#673ab7");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#3f51b5] cursor-pointer`}
        onClick={() => {
          handleColorChange("#3f51b5");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#2196f3] cursor-pointer`}
        onClick={() => {
          handleColorChange("#2196f3");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#00bcd4] cursor-pointer`}
        onClick={() => {
          handleColorChange("#00bcd4");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#009688] cursor-pointer`}
        onClick={() => {
          handleColorChange("#009688");
        }}
      >
        circle
      </span>
      <span
        className={`material-symbols-outlined text-[#4caf50] cursor-pointer`}
        onClick={() => {
          handleColorChange("#4caf50");
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
      <span
        className={`material-symbols-outlined text-[#ff9800] cursor-pointer`}
        onClick={() => {
          handleColorChange("#ff9800");
        }}
      >
        circle
      </span>
    </>
  );
};

export default TagIcons;
