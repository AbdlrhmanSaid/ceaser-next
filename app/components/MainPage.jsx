"use client";
import React, { useState } from "react";
import Language from "./Language";

export default function CipherDescription() {
  const [isArabic, setIsArabic] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center p-6  space-y-6  bg-gray-100 pt-14">
        <Language isArabic={isArabic} setIsArabic={setIsArabic} />

        <div className="min-h-screen flex items-center justify-center flex-col">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* Caesar Cipher Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {isArabic ? "شفرة قيصر" : "Caesar Cipher"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? "شفرة قيصر هي طريقة بسيطة للتشفير تعتمد على استبدال كل حرف بحرف آخر يبعد عنه بمقدار معين في الأبجدية. على سبيل المثال، إذا كان الإزاحة 3، فإن الحرف 'أ' يصبح 'د'. تعد شفرة قيصر واحدة من أقدم طرق التشفير التي استخدمها يوليوس قيصر في رسائله السرية."
                  : "Caesar Cipher is a simple encryption method that replaces each letter with another letter that is a fixed number of positions away in the alphabet. For example, with a shift of 3, 'A' becomes 'D'. It is one of the oldest ciphers, used by Julius Caesar for secret messages."}
              </p>
            </div>

            {/* Playfair Cipher Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {isArabic ? "شفرة بلايفير" : "Playfair Cipher"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? "شفرة بلايفير تعتمد على مصفوفة 5x5 تحتوي على الحروف الأبجدية. يتم تقسيم النص إلى أزواج من الحروف، ويُستبدل كل زوج بحروف جديدة بناءً على موقعها في المصفوفة. هذه الطريقة كانت شائعة في الحروب، حيث كانت تُستخدم لتشفير الرسائل بشكل أكثر تعقيدًا مقارنة بشفرة قيصر."
                  : "The Playfair Cipher uses a 5x5 grid containing the alphabet. The text is divided into pairs of letters, and each pair is replaced with new letters based on their positions in the grid. This method was popular in wars for encoding messages in a more complex manner than Caesar Cipher."}
              </p>
            </div>

            {/* Vigenère Cipher Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {isArabic ? "شفرة فيجينير" : "Vigenère Cipher"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? "شفرة فيجينير هي طريقة تشفير تعتمد على استخدام مفتاح (كلمة أو عبارة) لتحديد كيفية تغيير الحروف. يتم التعامل مع كل حرف في النص بناءً على موقعه في الأبجدية بالنسبة لموقع الحرف في المفتاح. هذه الطريقة أكثر تعقيدًا من شفرة قيصر وتوفر أمانًا أفضل لأنها تستخدم أبجدية متغيرة."
                  : "The Vigenère Cipher is an encryption method that uses a key (a word or phrase) to determine how letters are shifted. Each letter in the text is shifted based on its position in the alphabet relative to the corresponding letter in the key. This method is more secure than Caesar Cipher as it uses a shifting alphabet."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
