import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👎": "Thumb Down",
  "✌": "Peace Out",
  "👊": "Fist Bomb",
  "👏": "Clapping Hands",
  "💪": "Strength",
  "🙏": "Greetings"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Symbol interpretor</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Helping you Identify </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
