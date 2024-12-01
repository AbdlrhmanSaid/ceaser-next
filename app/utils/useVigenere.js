"use client";
import { useState } from "react";

const useVigenere = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const encrypt = () => {
    let extendedKey = key
      .toUpperCase()
      .repeat(Math.ceil(plaintext.length / key.length))
      .slice(0, plaintext.length);
    let result = plaintext
      .toUpperCase()
      .split("")
      .map((char, index) => {
        if (!alphabet.includes(char)) return char;
        const charIndex = alphabet.indexOf(char);
        const keyIndex = alphabet.indexOf(extendedKey[index]);
        const encryptedIndex = (charIndex + keyIndex) % alphabet.length;
        return alphabet[encryptedIndex];
      })
      .join("");
    setCiphertext(result);
  };
  return { setPlaintext, setKey, ciphertext, encrypt, plaintext, key };
};

export default useVigenere;
