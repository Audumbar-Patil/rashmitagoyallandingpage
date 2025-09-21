import React from 'react';

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <button className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
        <img
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Made With Material Tailwind
      </button>
    </a>
  );
}

export default FixedPlugin;