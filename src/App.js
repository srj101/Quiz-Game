import './App.css';
import  VideoList  from './Components/VideoList/VideoList.component';
import { Component } from 'react';

class MyApp extends Component{

  constructor(){
    super();
    this.state = {
      videos: [],
      searchField: '',
      key: 9
    }
  }

  shuffle =  (array) => {
    var currentIndex = array.length,  randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(datas => this.setState({videos:datas.results}))
  }

  render(){
    

    const {videos,searchField,key} = this.state; 



    const filteredvideos = videos.filter(video => {
      return video.category.toLowerCase().includes(searchField.toLowerCase())  
    });

    // const answers = videos.map(video => {
    //   this.shuffle(video.incorrect_answers.concat(video.correct_answer));
    // }) 
    // this.setState({answerss:answers})
    // {console.log(this.state.answers)}

    return(
      <div className="App">
        <input type="search" className="ssearch" placeholder="Search" onChange={ e => this.setState({ searchField: e.target.value }) }/>
        <VideoList videos={filteredvideos} key={key}  />
      </div>
    )
  }
}

export default MyApp;
