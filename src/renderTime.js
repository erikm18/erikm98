import {useLayoutEffect} from "react";

export default function useRenderTime(){
    const startTime = Date.now()
    useLayoutEffect(()=>{
    const renderTime = Date.now()
    let time = renderTime-startTime
    console.log(time)
    })
}