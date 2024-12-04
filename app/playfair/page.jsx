"use client";
import usePlayFair from "../utils/usePlayFair";
import Language from "../components/Language";

export default function PlayfairCipher() {
  const {
    key,
    setKey,
    plainText,
    setPlainText,
    cipherText,
    handleEncrypt,
    handledecrypt,
    isArabic,
    setIsArabic,
  } = usePlayFair();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 py-14">
        <Language isArabic={isArabic} setIsArabic={setIsArabic} />

        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Playfair Cipher
          </h1>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="key"
                className="block text-gray-700 font-medium mb-2"
              >
                {isArabic ? "المفتاح" : "Key"}
              </label>
              <input
                id="key"
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={isArabic ? "ادخل المفتاح" : "Enter your key"}
              />
            </div>
            <div>
              <label
                htmlFor="plainText"
                className="block text-gray-700 font-medium mb-2"
              >
                {isArabic ? "النص" : "plainText"}
              </label>
              <textarea
                id="plainText"
                value={plainText}
                onChange={(e) => setPlainText(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={isArabic ? "ادخل النص" : "Enter your plainText"}
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
              onClick={handledecrypt}
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
              {cipherText || (isArabic ? "لا توجد نتيجه" : "No result")}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
