import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question3 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.shy_cute,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string) => {

        const express:any = {
            "No Bahala Ka": expression.sad,
            "Sure no problem": expression.yey
        }

        if(answer.toLowerCase() == "no bahala ka") {
            setQuestionIndex((curr:number) => curr+1)
        }else {
            setData((curr:any) => (
                {
                    ...curr,
                    currExpression: express[answer],
                    showNextButton: answer.toLowerCase() == "sure no problem",
                    answer: answer
    
                }
            ))
        }
    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">Can I Borrow Your Precious Time?</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button 
                    onClick={() => handleButton("Sure no problem")} 
                    className={`${data.answer.toLowerCase() == "sure no problem"? "hidden": "block"}`}
                >
                    Sure no problem
                </button>
                <button 
                    onClick={() => 
                    handleButton("No Bahala Ka")} 
                    className={`${data.answer.toLowerCase() == "sure no problem"? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    No Bahala Ka
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+2)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}