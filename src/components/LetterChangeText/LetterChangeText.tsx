import { useEffect, useRef } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&é$*+-*!ù%€&123456789";
const letters2 = "abcdefghijklmnopqrstuvwxyz&é$*+-*!ù%€&123456789";

function LetterChangeText({ words }: { words: string[] }) {
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let bigCounter = 0;
    const bigInterval = setInterval(() => {
      if (bigCounter >= words.length) bigCounter = 0;
      let counter = 0;
      const word = words[bigCounter];
      const interval = setInterval(() => {
        const wordArr = word.split("");
        const newWord = wordArr
          .map((letter, idx) => {
            if (idx < counter) return letter;
            return letters[Math.floor(Math.random() * 40)];
          })
          .join("");
        wordRef.current!.innerText = newWord;
        counter++;
        if (counter >= 10) {
          wordRef.current!.innerText = word;
          clearInterval(interval);
        }
      }, 50);

      bigCounter++;
    }, 1500);
    return () => clearInterval(bigInterval);
  }, [words]);
  return (
    <div className="text-7xl font-extrabold" style={{ width: 900 }}>
      <span>DÉVELOPPEUR </span>
      <span ref={wordRef} className="whitespace-nowrap">
        {words[0]}
      </span>
    </div>
  );
}

export default LetterChangeText;
