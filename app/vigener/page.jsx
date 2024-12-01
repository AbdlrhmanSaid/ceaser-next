"use client";
import useVigenere from "../utils/useVigenere";
import { useState } from "react";

const VigenereCipher = () => {
  const {
    setPlaintext,
    setKey,
    ciphertext,
    encrypt,
    plaintext,
    key,
    setCiphertext,
  } = useVigenere();
  const [isArabic, setIsArabic] = useState(true);

  const handleDecrypt = () => setCiphertext(plaintext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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

      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Vigenère Cipher
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {isArabic ? "النص:" : "Plaintext:"}
            </label>
            <input
              type="text"
              placeholder={isArabic ? "أدخل النص هنا" : "Enter plaintext here"}
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {isArabic ? "المفتاح:" : "Key:"}
            </label>
            <input
              type="text"
              placeholder={isArabic ? "أدخل المفتاح هنا" : "Enter key here"}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={encrypt}
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
            {isArabic ? "النص المشفر:" : "Ciphertext:"}
          </h2>
          <p className="text-gray-600 bg-gray-100 rounded-lg p-4 mt-2">
            {ciphertext || (isArabic ? "لا توجد نتيجه" : "No result")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VigenereCipher;
