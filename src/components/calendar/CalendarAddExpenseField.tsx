import { TagType } from "@/utils/types";
import React from "react";

type AddExpenseFieldProps = {
  id: string | number;
  name: string | number;
  value: string | number;
  type: string | number;
  placeholder: string;
  fieldType: string;
  onChange: (e: any) => void;
  disabled: boolean;
  selectOptions?: {}[];
};

const CalendarAddExpenseField = (props: AddExpenseFieldProps) => {
  const {
    id,
    name,
    value,
    type,
    placeholder,
    fieldType,
    onChange,
    disabled,
    selectOptions,
  } = props;

  const setSelectedType = (type: string | number) => {
    let isSelected = false;
    console.log("Type: ", value);
    if (type === "Cash") {
      isSelected = true;
    } else if (type === "Credit") {
      isSelected = true;
    } else {
      isSelected = true;
    }

    return isSelected;
  };

  const setSelectedtag = (tagId: string) => {
    let isSelected = false;

    return isSelected;
  };
  return fieldType === "text" ? (
    <>
      <input
        id={id as string}
        name={name as string}
        value={value}
        className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
        type={type as string}
        placeholder={placeholder}
        onChange={onChange}
        required
        disabled={disabled}
      />
    </>
  ) : fieldType === "select" ? (
    <select
      id={id as string}
      name={name as string}
      className="rounded-md flex-grow text-sm p-3 m-3 border border-gray-200"
      onChange={onChange}
      required
    >
      <option
        value=""
        selected={name === "type" ? setSelectedType(value) : false}
      >
        Choose Type
      </option>
      {selectOptions?.map((selectOption: any | TagType) => (
        <option
          key={name === "type" ? selectOption.value : selectOption._id}
          value={name === "type" ? selectOption.value : selectOption._id}
          selected={
            name === "type" ? setSelectedType(value) : selectOption.name
          }
        >
          {name === "type" ? selectOption.value : selectOption.name}
        </option>
      ))}
    </select>
  ) : (
    ""
  );
};

export default CalendarAddExpenseField;
