import React, { useState } from "react";
import { VideoCSS } from "./Video.css";
import jsxToString from "jsx-to-string";
let somekey = 1;
function htmlEntities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/,/g, "&#039;");
}
const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const Video = ({ key, video, answers }) => {
  const [answer, setAnswer] = useState();
  const [msg, setMsg] = useState("");
  const choosenAns = (e, cr) => {
    setAnswer(e.value);
    e.append(cr);
    if (e.value != cr) {
      setMsg("oooo");
    } else {
      setMsg("");
    }
    console.log(msg.length > 1);
  };

  return (
    <div className={msg.length > 1 ? "single-video ok" : "single-video"}>
      <ul class="question-single">
        <li dangerouslySetInnerHTML={{ __html: video.question }}></li>
        <li>
          <select
            id="options"
            onChange={(event) => choosenAns(event.target, video.correct_answer)}
            value={answer}
          >
            <option value="">Select Correct Answer</option>
            {answers.map((option, index) => {
              return <option key={somekey++}>{option}</option>;
            })}
          </select>
        </li>
      </ul>

      <hr />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Video;
