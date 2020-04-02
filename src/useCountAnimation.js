import React, {useState, useEffect} from "react";

export default function useCountAnimation (countTo, countTime, fps=30){
    let [number, setNumber] = useState(0)
    useEffect(()=> {
        const startTime = Date.now()
        const myNumber=setInterval(() => {
            let actTime = Date.now()
            let actNumber = Math.round((actTime - startTime)*(countTo/countTime))
            if (actNumber > countTo) {
                setNumber(countTo)
                clearInterval(myNumber)
            }
            else {
                setNumber(actNumber)
            }
            console.log(number)
        }, (1000/fps))
        return ()=> {clearInterval(myNumber)}
},[countTime, countTo]);

    return number
}
