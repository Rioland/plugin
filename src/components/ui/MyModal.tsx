import React from "react";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Do not render if MyModal is closed

  return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md z-50 ">
           <button onClick={onClose} className="absolute top-6 right-4 text-xl  ms-4 text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-500 transition cursor-pointer">
            &times;
          </button>
        <div className=" p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] relative ">
          {/* Close Button */}
         
          {/* Modal Content */}
       <div className="m-5">   {children}</div>
        </div>
      </div>
  );
};

export default MyModal;
