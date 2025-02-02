import { expression } from "@/data/expression";
import dayjs from "dayjs"
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function DateCountdown() {

    const [dateCountDown, setDateCountDown] = useState<any>(
        {
            hours:0,
            mins:0,
            sec:0
        }
    )


    useEffect(() => {
        setInterval(() => {
            if(!checkDinnerDate()){
                countDown()
            }

        },1000)
    },[])

    const countDown = () => {
        const today = dayjs()
        const DinnerDate = dayjs('2025-02-14')
    
        const differenceInSec = DinnerDate.diff(today, 'second');
        const hours = Math.floor(differenceInSec / 3600);
        const mins = Math.floor((differenceInSec % 3600) / 60);
        const sec = differenceInSec % 60;

        setDateCountDown((curr:any) => (
            {
                hours: hours,
                mins: mins,
                sec:sec
            }
        ))
    }

    const checkDinnerDate = () => {

        const DinnerDate = dayjs('2025-02-14')
        const today = dayjs().startOf('day');
        const isToday = today.isSame(DinnerDate, 'day');

        return true
    }

    return (
        <div className="h-screen flex flex-col justify-end">
            <div className="">
                {
                    checkDinnerDate() 

                    ? <div>
                        <img src={expression.valentines_day} className="m-auto" height={100}/>
                        <h1 className="text-center text-3xl font-bold">Coming!!</h1>
                     </div>

                    : <div>
                        <img src={expression.date_countdown} className="m-auto" width="500"/>
                        <h1 className="text-center text-3xl">Date Countdown</h1>
                        <h1 className="text-center text-3xl font-bold">{dateCountDown.hours} hr/s  {dateCountDown.mins} min/s {dateCountDown.sec} s</h1>
                     </div>
                }
                
            </div>   
            <Footer /> 
        </div>
    )
}