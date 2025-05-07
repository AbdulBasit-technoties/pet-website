import React from 'react';
import Select from 'react-select';


const customClassNames = {
    control: ({ isFocused }) =>
      `w-full !border !border-c1 px-3 py-2 rounded focus:outline-none text-c3 !ring-0 text-black
      ${isFocused ? '!border-c1' : '!border !border-gray-600 text-black'}
      !shadow-none focus:!ring-0 focus:!ring-transparent focus:!ring-offset-0 focus:!shadow-none text-black`,

    menu: () => "mt-1 rounded-md bg-white shadow-lg text-black",

    option: ({ isFocused, isSelected }) => {
      let base = "p-2 cursor-pointer transition-colors duration-500 hover:!bg-orange hover:!text-black ";

      if (isSelected) {
        base += " !bg-orange text-black";
      } else if (isFocused) {
        base += " !bg-orange text-black text-black";
      } else {
        base += " bg-white text-black ";
      }

      return base;
    },

    singleValue: () => "!text-gray-500",

    placeholder: () => "!text-gray-400",

    input: () => "!text-black focus:!ring-0 focus:!ring-transparent focus:!ring-offset-0 !m-0",

    dropdownIndicator: ({ isFocused, isSelected }) =>
      (isFocused || isSelected) ? "!text-orange" : "text-gray-400 "
  };


const customStyles = {
    input: (provided, state) => ({
        ...provided,
        color: state.isFocused
            ? (state.selectProps.isDark ? '#fff' : '#000')
            : (state.selectProps.isDark ? '#fff' : '#000'),
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
    }),
};



const SelectComponent = ({ options, value, onChange, className }) => {
    return (
        <Select
            options={options}
            value={options.find(option => option.value === value) || null}
            onChange={(selectedOption) => onChange(selectedOption.value)}
            className={className}
            classNamePrefix="select"
            classNames={customClassNames}
            styles={customStyles}
        />

    );
};

export default SelectComponent;
