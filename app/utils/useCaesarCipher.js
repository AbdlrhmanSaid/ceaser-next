"use client";
import { useState } from "react";

const useCaesarCipher = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(1);
  const [result, setResult] = useState("");
  const [isArabic, setIsArabic] = useState(false);

  const caesarCipher = (text, shift) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const shiftedText = text.split("").map((char) => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char;
      const shiftedIndex = (index + shift) % alphabet.length;
      return alphabet[
        shiftedIndex >= 0 ? shiftedIndex : shiftedIndex + alphabet.length
      ];
    });
    return shiftedText.join("");
  };

  const handleEncrypt = () => {
    const adjustedShift = shift > 25 ? 1 : shift;
    setShift(adjustedShift);
    setResult(caesarCipher(text, parseInt(adjustedShift, 10)));
  };
  const handleDecrypt = () => setResult(text);

  return {
    caesarCipher,
    text,
    setText,
    shift,
    setShift,
    result,
    setResult,
    isArabic,
    setIsArabic,
    handleEncrypt,
    handleDecrypt,
  };
};

export default useCaesarCipher;
