import React, { useContext,useState,useRef, useCallback } from "react";
import "./label.css"
import { MyContext , MyNewContext} from "../pages/home";


// function Label(){
//     return <span>Label B</span>
// }
function Label (props){
    const val=useContext(MyContext);
    const val2=useContext( MyNewContext);
    const [showTooltip,setShowTooltip]= useState(false);
    const refObj=useRef();

    // const refObj=useMemo(()=>{
    //     return {
    //         current:undefined;
    //     }
    // })

    const refCallback=useCallback((domItem)=>{
        console.log(domItem);
    })
    console.log(refObj);

    

      
    console.log('**********'+val2);
   
        const style=props.isActive ? {background:'green'} :{background:'orange'}
        if(val===false){
            return null;
        }
        const handleMouseEnter=(evt)=>{
            console.log(evt.target);
            console.log(refObj.current);
            const width1=evt.target.getBoundingClientRect().width;
            const width2=refObj.current.getBoundingClientRect().width;

            refObj.current.style.left=`${-(width2-width1)/2}px`;

            
            setShowTooltip(true);
        }
        const handleMouseLeave=()=>{
            setShowTooltip(false)
        }
        return(
            <div className="list-label-item-container">
                 <span 
                     onClick={()=>{
                     props.onAction(props.isActive? 'active':'non-active');

                    }}
                    className="list-label-item" 
                    style={style}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}> 
                    {props.isActive ? 'Active' :'Non Active'}
                    </span>
                    <label 
                    //ref={refObj}
                    ref={refCallback}
                    className={`tooltip ${showTooltip ? 'show-tooltip':'hide-tooltip'}`}>
                    This is {props.isActive?'active':'non-active'} tooltip
                    </label></div>
                    );}

export default Label;