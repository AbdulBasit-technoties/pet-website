// Modal.js
import React from 'react';

const Modal = ({ onClose, children, Title = 'Modal Title' }) => {
  return (
   
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="relative w-3/4 xl:w-3/5 xl:max-h-[800px] lg:max-h-[700px] max-h-[600px] overflow-y-auto bg-white rounded-lg shadow dark:bg-primary">
            <div class="flex  items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    {Title}
                </h3>
                <button type="button"  onClick={onClose} class="w-[30px] text-custgreen h-[30px] border hover:text-white border-custgreen transition-all duration-500 hover:bg-custgreen rounded-full flex justify-center items-center cursor-pointer">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
                <div class="w-full">
                    {children}
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Modal;
