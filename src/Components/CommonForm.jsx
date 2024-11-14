/* eslint-disable react/prop-types */

import CommonButton from "./CommonButton";
import CommonInput from "./CommonInput";

const CommonForm = ({ formControls = [], formData, setFormData, onSubmit }) => {
  //
  //

  function renderFormElements(singleFormElement = {}, formData, index) {
    let element = null;

    switch (singleFormElement.componentType) {
      case "input":
        element = (
          <CommonInput
            key={index}
            type={singleFormElement.type}
            placeholder={singleFormElement.placeholder}
            name={singleFormElement.name}
            value={formData[singleFormElement.name]}
            onChange={(e) =>
              // formData is an object of all form data with key-value pairs as name and their values
              // copying the object and then changing a specific key-value pair
              // {user-name: 'ms', user-email: 'ab', user-password: '1234'}
              // {... formData, [user-name] : 'Mridul'} -> here name value is user-name
              setFormData({
                ...formData,
                [singleFormElement.name]: e.target.value,
              })
            }
          />
        );
        break;

      case "button":
        element = (
          <CommonButton
            key={index}
            btnText={singleFormElement.btnText}
            type={singleFormElement.type}
          />
        );
        break;

      default:
        element = (
          <CommonInput
            key={index}
            type={singleFormElement.type}
            placeholder={singleFormElement.placeholder}
            name={singleFormElement.name}
            value={formData[singleFormElement.name]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [singleFormElement.name]: e.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormElement, index) =>
        renderFormElements(singleFormElement, formData, index)
      )}
    </form>
  );
};

export default CommonForm;
