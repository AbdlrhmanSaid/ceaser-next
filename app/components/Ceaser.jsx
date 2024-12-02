"use client";

import { useState } from "react";
import { caesarCipher } from "../utils/caesarCipher";
import Language from "./Language";

const Ceaser = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(1);
  const [result, setResult] = useState("");
  const [isArabic, setIsArabic] = useState(true);

  const handleEncrypt = () => {
    const adjustedShift = shift > 25 ? 1 : shift;
    setShift(adjustedShift);
    setResult(caesarCipher(text, parseInt(adjustedShift, 10)));
  };
  const handleDecrypt = () => setResult(text);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <Language isArabic={isArabic} setIsArabic={setIsArabic} />

      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Caesar Cipher
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {isArabic ? " النص:" : "Text :"}
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={isArabic ? "ادخل النص هنا" : "Enter Text here"}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {isArabic ? "الإزاحة" : "Shift"}
            </label>
            <input
              type="number"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={isArabic ? "ادخل الإزاحة هنا" : "enter Shift here"}
            />
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleEncrypt}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {isArabic ? "تشفير" : "Encryption"}
          </button>
          <button
            onClick={handleDecrypt}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            {isArabic ? "فك التشفير" : "Decryption"}
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {isArabic ? "النتيجة:" : "Result :"}
          </h2>
          <p className="text-gray-600 bg-gray-100 rounded-lg p-4 mt-2">
            {result || (isArabic ? "لا توجد نتيجه" : "No result")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ceaser;
