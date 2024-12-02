import React from "react";

const LanguageCompo = ({ isArabic, setIsArabic }) => {
  return (
    <div className="flex space-x-4 p-4 justify-center items-center">
      <button
        className={`py-2 px-4 rounded-lg ${
          isArabic ? "bg-blue-600" : "bg-gray-400"
        } text-white hover:bg-blue-700`}
        onClick={() => setIsArabic(true)}
      >
        العربية
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          !isArabic ? "bg-blue-600" : "bg-gray-400"
        } text-white hover:bg-blue-700`}
        onClick={() => setIsArabic(false)}
      >
        English
      </button>
    </div>
  );
};

export default LanguageCompo;
