import React from "react";
import { VideoListCSS } from "./VideoList.css";
import Video from "../Video/Video.component";
import he from "he";
let keyis = 0;
const renderHTML = (escapedHTML: string) =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML },
  });
class VideoList extends React.Component {
  constructor() {
    super();
  }

  shuffle = (array) => {
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

  render() {
    return (
      <div>
        <div className="video-container">
          {this.props.videos.map((video) => (
            <Video
              key={keyis + 1}
              video={video}
              answers={this.shuffle(
                video.incorrect_answers.concat(video.correct_answer)
              )}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default VideoList;
