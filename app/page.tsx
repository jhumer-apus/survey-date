"use client"

import AudioPlay from "@/components/AudioPlay";
import DateCountdown from "@/components/DateCountDown";
import ParticleComponent from "@/components/ParticleComponent";
import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import Question4 from "@/components/Question4";
import Question5 from "@/components/Question5";
import Question6 from "@/components/Question6";
import Question7 from "@/components/Question7";
import Question8 from "@/components/Question8";
import { Fragment, useEffect, useRef, useState } from "react";
// import palagi from "@/public/assets/musics/palagi.mp3"



export default function Home() {

  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [isPlay, setIsPlay] = useState<boolean>(false)

  const sections = [
    <Question1 
      setIsPlay={setIsPlay}
      setQuestionIndex={setQuestionIndex}
    />,
    <Question2
      setQuestionIndex={setQuestionIndex}
    />,
    // If right -> Q4 : left -> Q5
    <Question3
      setQuestionIndex={setQuestionIndex}
    />,
    <Question4
      setQuestionIndex={setQuestionIndex}
    />,

    //If left -> Q6: right -> Q8
    <Question5
      setQuestionIndex={setQuestionIndex}
    />,

    //If right -> Q7: left -> Q8
    <Question6
      setQuestionIndex={setQuestionIndex}
    />,
    // all to Q8
    <Question7
      setQuestionIndex={setQuestionIndex}
    />,

    <Question8
      setQuestionIndex={setQuestionIndex}
    />,

    <DateCountdown />
  ]

  

  return (
    <div>
      <ParticleComponent/>
      <AudioPlay isPlay={isPlay} />
      {sections[questionIndex]}
    </div>
  );
}
