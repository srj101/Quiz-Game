import React from 'react';
import { VideoCSS } from './Video.css';
import jsxToString from 'jsx-to-string';
let somekey = 1;
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/,/g,'&#039;');
}



class Video extends React.Component{
    constructor(){
        super();

        
            
      
            // console.log(this.shuffle(singlevid.incorrect_answers.concat(singlevid.correct_answer)).find(singlevid.correct_answer));
         
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
    

    render(){

    return(
     
        <div className="single-video-" >
           
           {
            //    vec.push_back({"What's Your Father's Name?" , {"1. Foysal 2. Selim 3. Mf 4. Fufsdk",{1,"ans"}}});
            }

            

            {`vec.push_back({"`}<span dangerouslySetInnerHTML={ {__html: this.props.video.question}}></span>{`" , {`}<span id="options">{`"`}
        { this.props.answers.map((option,index)=>{
                                return <span key={somekey++}>\n {index+1}{`. `}{option}{` `}{`\n`}<span id="spacing"></span></span>
                            })}{`"`}{`,`}{ this.props.answers.map((option,index)=>{
                                if(option == this.props.video.correct_answer) 
                                {
                                return <span key={somekey++}>{`{`}{index+1}{`,"`}{option}{`"`}{`}`}</span>
                                }
                            })}
            </span>{`}});`}



            {/* <hr />
            <br />
            <hr />
                <ul>
                <li>Type : { htmlEntities(props.video.type) } </li>
                <li id="question" dangerouslySetInnerHTML={ {__html: props.video.question} }></li>
                <li><em>Category : {props.video.category}</em></li>
                <li id="answer" dangerouslySetInnerHTML={ {__html: props.video.correct_answer} }></li>


                <li>
                    options : 
                        <ul>
                            { props.video.incorrect_answers.map(option=>{
                                return <li key={somekey+1}>{option}</li>
                            })}
                        </ul>
                </li>
            </ul> */}
                
        </div>
    )
    }
        
        }
 
export default Video;