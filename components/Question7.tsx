import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question7 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState<any>(
        {
            width: 0,
            height: 0,
        }
    )

    const [data, setData] = useState<any>(
        {
            currExpression: expression.depress,
            showNextButton: false,
            answer: ""

        }
    )

    const onMouseEnter = () => {
        setIsHovered(true)
        setPosition((curr:any) => (
            {
                top: Math.random() * (window.innerHeight-100),
                left: Math.random() * (window.innerWidth-100),

            }
        ))

    }


    const handleButton = (answer:string, part: "right" | "left") => {

        if(part == "right") {
            // setQuestionIndex((curr:number) => curr+1)
        } else {
            setData((curr:any) => (
                {
                    ...curr,
                    currExpression: expression.hyper_excited,
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
            <p className="text-3xl font-semibold text-center">{"CGE NA PLSSSSSS HUHUHU :<"}</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Oo na kainis", "left")} className={`${data.showNextButton? "hidden": "block"}`}>Oo na kainis</button>
                <button 
                    onClick={() => 
                    handleButton("No nga sabi", "right")} 
                    style={
                        {
                            top: position.top,
                            left: position.left
                        }
                    }
                    className={`${data.showNextButton? "hidden": "block"} ${isHovered? `whitespace-nowrap transition-all duration-150 absolute`: "relative"}`}
                    onMouseEnter={onMouseEnter}
                    // onMouseLeave={() => setIsHovered(false)}
                >
                    No nga sabi eh
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+2)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}