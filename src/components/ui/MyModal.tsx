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
           <button onClick={onClose} className="absolute top-4 right-4 text-xl  ms-4">
            &times;
          </button>
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%] relative ">
          {/* Close Button */}
         
          {/* Modal Content */}
       <div className="m-5">   {children}</div>
        </div>
      </div>
  );
};

export default MyModal;
