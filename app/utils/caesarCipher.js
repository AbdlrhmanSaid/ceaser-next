export const caesarCipher = (text, shift) => {
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
