import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question4 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.sad,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string) => {
        setData((curr:any) => (
            {
                ...curr,
                currExpression: expression.excited,
                showNextButton: true,
                answer: answer

            }
        ))
    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">Plssss Sige Naaaa</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Sige na nga ankulit")} className={`${data.showNextButton? "hidden": "block"}`}>Sige na nga ankulit</button>
                <button 
                    onClick={() => 
                    handleButton("Ankyut mo sige na nga")} 
                    className={`${data.showNextButton? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered? "Ankyut mo sige na nga": "Nope"}
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+1)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}