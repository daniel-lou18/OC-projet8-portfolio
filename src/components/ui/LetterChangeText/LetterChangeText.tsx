import { useEffect, useRef } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&é$*+-*!ù%€&123456789";

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
        if (!wordRef.current) return;
        wordRef.current!.innerText = newWord;
        counter++;
        if (counter >= 10) {
          if (!wordRef.current) return;
          wordRef.current!.innerText = word;
          clearInterval(interval);
        }
      }, 50);

      bigCounter++;
    }, 1500);
    return () => clearInterval(bigInterval);
  }, [words]);
  return (
    <div className="text-3xl tracking-tighter lg:text-8xl">
      <div>DÉVELOPPEUR </div>
      <div ref={wordRef} className="relative">
        {words[0]}
      </div>
    </div>
  );
}

export default LetterChangeText;
