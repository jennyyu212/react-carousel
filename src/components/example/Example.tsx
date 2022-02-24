import React from 'react';
import Define from'../../assets/define.svg';
import Discover from'../../assets/discover.svg';
import Ideate from'../../assets/ideate.svg';
import Prototype from'../../assets/prototype.svg';
import Testing from'../../assets/testing.svg';
import Carousel from "../carousel/Carousel"
import "./Example.scss"

function App() {
      return (
          <Carousel>
            <div className="item">
              <img src={Discover} alt="discover"/>
              <a href="https://drive.google.com/file/d/1WJPKaqx_PqzZLiHxmcZ_shZ0n503aEsf/view?usp=sharing" target="_blank" rel="noreferrer">Discover</a>
              <p>User Research</p>
              <p>User Interviews</p>
              <p>Questionaire</p>
            </div>
    
            <div className="item">
              <img src={Define} alt="define"/>
              <a href="https://drive.google.com/file/d/1NUUyajhhvovx-EJuITxVEW1J-o7XWdEa/view?usp=sharing" target="_blank" rel="noreferrer">Define</a>
              <p>Persona Map</p>
              <p>Technology Map</p>
              <p>User Journey</p>
            </div>
    
            <div className="item">
              <img src={Ideate} alt="ideate"/>
              <a href="https://drive.google.com/file/d/1xKkPximLPqFU5SjADYUBKOUUyDuwdY66/view?usp=sharing" target="_blank" rel="noreferrer">Ideate</a>
              <p>Worst Ideas</p>
              <p>Blue Cards</p>
              <p>Contra-Logic</p>
            </div>
    
            <div className="item">
              <img src={Prototype} alt="prototype"/>
              <a href="https://drive.google.com/file/d/1Att4ar4YWE8CdMtnuiYqwmG3CzzFaznN/view?usp=sharing" target="_blank" rel="noreferrer">Prototype</a>
              <p>Low-Fi</p>
              <p>High-Fi</p>
            </div>
    
            <div className="item">
              <img src={Testing} alt="testing"/>
              <a href="https://drive.google.com/file/d/1N0IvkDjlx5C0-iP4OdP4rqTmz_h35w8b/view?usp=sharing" target="_blank" rel="noreferrer">Testing</a>
              <p>Feedback</p>
              <p>Survey</p>
              <p>Improvements</p>
            </div>
          </Carousel>
      );
    }
    export default App;
    