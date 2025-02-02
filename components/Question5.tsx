import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question5 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.shy_cute,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string, part: "right" | "left") => {

        if(part == "left") {
            setQuestionIndex((curr:number) => curr+1)
        } else {
            setData((curr:any) => (
                {
                    ...curr,
                    currExpression: expression.wow,
                    showNextButton: true,
                    answer: answer
    
                }
            ))
        }

    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">{"Uhmm May i-aask sana ako sayo :>"}</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Hmm what is it?", "left")} className={`${data.showNextButton? "hidden": "block"}`}>Hmm what is it?</button>
                <button 
                    onClick={() => handleButton("Wag na", "right")}
                    disabled
                    className={`${data.showNextButton? "hidden": "block"} transition-all hover:opacity-0`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Wag na
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+3)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}