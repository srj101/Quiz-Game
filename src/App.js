import "./App.css";
import VideoList from "./Components/VideoList/VideoList.component";
import { Component } from "react";

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      searchField: "",
      key: 9,
    };
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

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=50")
      .then((response) => response.json())
      .then((datas) => this.setState({ videos: datas.results }));
  }

  render() {
    const { videos, searchField, key } = this.state;

    const filteredvideos = videos.filter((video) => {
      if (video.category.toLowerCase().includes(searchField.toLowerCase())) {
        return video;
      }
    });

    return (
      <div className="App">
        <VideoList videos={filteredvideos} key={key} />
      </div>
    );
  }
}

export default MyApp;
