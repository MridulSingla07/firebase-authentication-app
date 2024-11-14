/* eslint-disable react/prop-types */

const CommonButton = ({ btnText, type }) => {
  return (
    <button
      type={type || "button"}
      className="px-3 py-1 my-4 bg-blue-600 hover:bg-blue-500 text-white text-xl font-light rounded-sm w-full"
    >
      {btnText}
    </button>
  );
};

export default CommonButton;
