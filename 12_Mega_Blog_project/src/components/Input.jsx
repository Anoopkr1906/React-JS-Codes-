import React, { useId } from "react";

//ref is passed differently from the props in the forwardRef function

//Note:
// In React 19, forwardRef is no longer necessary. Pass ref as a prop instead. forwardRef will deprecated in a future release. Before we need to pass the ref other than props, now we can pass it as a prop. forwardRef was used to pass the ref from one compomnent to other and ultimately to the browser DOM element.
//! In this project, we didn't actually passed any ref while making the project.
// We simply used onSubmit on form to handle the submit functionality of the form. If we had to do it differently, we would need to use useRef() hook in the form page and pass the ref to the <Input /> componenet which would further pass it down to the browser <input /> element. After that we would add a onClick event listenr on the button and make do abcref.current.submit to submit the form.
// If it is not making any sense then, go to App.jsx of 07_Lec_10 and see how ref is actually used.
// forwardRef was used earlier to pass this ref from one componenet to other and then ultimatelty to the Browser DOM node. BUt now the ref can be passed directly without the need of forwardRef as a prop. 
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        className={` ${className}`}
        ref={ref}
        id={id}
        {...props}
      ></input>
    </div>
  );
});

export default Input;
