/* eslint-disable react/prop-types */

const CommonInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
}) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter data ..."}
      value={value}
      name={name}
      onChange={onChange}
      className={
        className ||
        "px-4 py-1 my-2 rounded-sm text-lg font-light text-gray-700 w-full bg-white block border"
      }
    />
  );
};

export default CommonInput;
