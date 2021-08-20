import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import React from 'react';
import Buttons from './components/Buttons';
import Details from './components/Details';

function App() {
  const [text, setText] = React.useState("");
  const [words, setWords] = React.useState(0);
  const [char, setChar] = React.useState(0);
  const[mode, setMode] = React.useState("light");

  const toggleMode = ()=>{
    mode === "light" ? setMode("dark") : setMode("light");

    mode === "light" ? document.body.style.backgroundColor="#121212" : document.body.style.backgroundColor="white"
  }

  let changeText = (e) => {
    let input = e.target.value;
    let countWords = input.split(" ");
    let countChar = input.split("");
    setText(input);
    let length = countWords.length;
    if(countWords.length === 1){
      if(countWords[0] === ""){
        length = 0;
      }
    }
    
    setWords(length);
    setChar(countChar.length);
    //console.log(text)
  }

  const toLowerCase = () => {
    setText(text.toLowerCase());
    //console.log("editing to lower case")
  }

  const toUpperCase = () => {
    setText(text.toUpperCase());
    //console.log("editing to uppercase")
  }

  const clearText = ()=>{
    setText("");
    setWords(0);
    setChar(0);
  }

  return (
    <div className="container">
      <Header title="Text Analyzer" setMode={toggleMode} mode={mode}/>
      <Input changeText={changeText} text={text} mode={mode} />
      <Buttons tolc={toLowerCase} touc={toUpperCase} clearText={clearText} mode={mode}/>
      <Details words={words} chars={char} mode={mode}/>
    </div>
  );
}

export default App;
