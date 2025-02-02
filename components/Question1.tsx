import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setIsPlay: any
    setQuestionIndex: any
}
export default function Question1 (props: Props) {

    const { setIsPlay, setQuestionIndex } = props

    const [data, setData] = useState<any>(
        {
            currExpression: expression.shy_cute,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string) => {
        setIsPlay((curr:boolean) => true)
        setData((curr:any) => (
            {
                ...curr,
                currExpression: expression.yey,
                showNextButton: true,
                answer: answer

            }
        ))
    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">Hi Rina Can I Disturb you?</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Yes")} className={`${data.showNextButton? "hidden": "block"}`}>Yes</button>
                <button onClick={() => handleButton("No choice, Sige na lang")} className={`${data.showNextButton? "hidden": "block"}`}>No choice, Sige na lang</button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+1)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}