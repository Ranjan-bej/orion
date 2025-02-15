import React, { createContext, useState } from 'react'

import {run} from '../gemini.js'
export const dataContext= createContext();
const UserContext = ({children}) => {
    function speak(text){
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="hi-GB"
        window.speechSynthesis.speak(text_speak)
    }
    async function airesponse(prompt){
        let text =await run(prompt)
        let newText = text.split("**")&&text.split("*")&&text.replace("google","Ranjan")&&text.replace("Google","Ranjan");
        speak(newText);
    }
    let speech = window.SpeechRecognition||window.webkitSpeechRecognition;
    let recognition = new speech();
    recognition.onresult=(e)=>{
        let currentIndex = e.resultIndex;
        let transcript = e.results[currentIndex][0].transcript;
        takeCommand(transcript.toLowerCase());
    }
    let value={
        recognition,
    }
    function takeCommand(command){
        if(command.includes("open")&&command.includes("youtube")){
            window.open("https://www.youtube.com/","_blank")
            speak("opening Youtube..")
        }
        if(command.includes("open")&&command.includes("instagram")){
            window.open("https://www.instagram.com/","_blank")
            speak("opening instagram..")

        }
        if(command.includes("open")&&command.includes("google")){
            window.open("https://www.google.com/","_blank")
            speak("opening google..")

        }
        else{
            airesponse(command)
        }
    }
  return (
    <dataContext.Provider value={value}>
    <div>{children}</div>
    </dataContext.Provider>
  )
}

export default UserContext