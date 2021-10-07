import React from "react";
const Message = ({ children, me = 0 }) => {
  return (
    <div
      className={`flex items-end  ${
        me === 1 ? " justify-end" : me === 0 ? "" : "justify-center"
      }`}
      style={{ margin: "4px" }}
    >
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        <span
          className={`px-4 py-2 inline-block   ${
            me === 1
              ? "rounded-lg rounded-bl-none bg-blue-600 text-white"
              : me === 0
              ? "rounded-lg rounded-bl-none bg-gray-300 text-gray-600"
              : "shadow-md border-2"
          } `}
        >
          {children}
        </span>
      </div>
    </div>
  );
};
export default Message;
