"use client";
import { useState } from "react";

const usePlayFair = () => {
  const [key, setKey] = useState("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [isArabic, setIsArabic] = useState(false);

  const generateMatrix = (key) => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const processedKey = Array.from(
      new Set(key.toUpperCase().replace(/J/g, "I") + alphabet)
    )
      .join("")
      .slice(0, 25);

    return Array.from({ length: 5 }, (_, i) =>
      processedKey.slice(i * 5, i * 5 + 5).split("")
    );
  };

  const encryptText = (text, key) => {
    const matrix = generateMatrix(key);
    const cleanText = text
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");

    const pairs = [];
    for (let i = 0; i < cleanText.length; i += 2) {
      const a = cleanText[i];
      const b = cleanText[i + 1] || "X";
      pairs.push(a === b ? [a, "X"] : [a, b]);
    }

    return pairs
      .map(([a, b]) => {
        let [aRow, aCol, bRow, bCol] = [-1, -1, -1, -1];

        matrix.forEach((row, rowIndex) => {
          if (row.includes(a)) [aRow, aCol] = [rowIndex, row.indexOf(a)];
          if (row.includes(b)) [bRow, bCol] = [rowIndex, row.indexOf(b)];
        });

        if (aRow === bRow) {
          return matrix[aRow][(aCol + 1) % 5] + matrix[bRow][(bCol + 1) % 5];
        } else if (aCol === bCol) {
          return matrix[(aRow + 1) % 5][aCol] + matrix[(bRow + 1) % 5][bCol];
        } else {
          return matrix[aRow][bCol] + matrix[bRow][aCol];
        }
      })
      .join("");
  };

  const handleEncrypt = () => {
    setCipherText(encryptText(plainText, key));
  };

  const handledecrypt = () => {
    setCipherText(plainText.toUpperCase());
  };

  return {
    key,
    setKey,
    plainText,
    setPlainText,
    cipherText,
    setCipherText,
    isArabic,
    setIsArabic,
    handledecrypt,
    handleEncrypt,
  };
};

export default usePlayFair;
