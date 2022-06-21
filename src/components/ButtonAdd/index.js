import React from 'react';

const ButtonAdd = ({ add }) => {
  return (
    <div className="flex justify-end">
      <button
        className="text-gray-900 items-center px-3 h-12 hover:text-gray-100 drop-shadow-lg rounded-full border bg-gray-300 hover:scale-105 active:scale-95 ease-in-out duration-100"
        type="submit"
        onClick={add}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonAdd;
