import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question6 (props: Props) {

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

        if(part == "right") {
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
            <p className="text-3xl font-semibold text-center">{"I would like to ask you if you could be my valentine this coming February 14, 2025 around 7:00 pm :> ?"}</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Oo naman ikaw pa", "left")} className={`${data.showNextButton? "hidden": "block"}`}>Oo naman ikaw pa</button>
                <button 
                    onClick={() => 
                    handleButton("No", "right")} 
                    className={`${data.showNextButton? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    No
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+2)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}