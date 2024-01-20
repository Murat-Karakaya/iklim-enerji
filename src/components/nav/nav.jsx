import "./navstyle.css";
import Navbutton from "../navbutton/navbutton";
import Hambutton from "../hambutton/hambutton";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { modalAtom } from "../../jotai/atoms";

const Nav=()=> {
    const [, toggleModal]=useAtom(modalAtom);
    const[smallNavVis,newsmalldis]=useState(false);

    useEffect(()=>{
        if(window.innerWidth < 800 && !smallNavVis){
            setTimeout(()=>{
                document.querySelector("nav").style.display="none"
            },200)
        }
    },[smallNavVis])

    const showModal=()=> toggleModal(true)

    const hamClicked=()=>{
        document.querySelector("nav").style.display="block"
        setTimeout(()=>{
            newsmalldis(true);
        },0)
    }

    const hideNav=()=> newsmalldis(false)
    
    const buttonValues = ["Anasayfa", "Rüzgar Enerjisi", "Hidrolik Enerji", "Nükleer Enerji"/* , "Fosil Yakıt" */]
    return(
        <>
            <Hambutton clickHandler={hamClicked}/>
            <nav className={smallNavVis?"navVis":""}>
                <button aria-label="close-Navigation" onClick={hideNav} id="nav-x" className="button-x" ></button>
                {buttonValues.map((value,i)=> <Navbutton key={value} id={i} >{value}</Navbutton>)}
                <button id="end" onClick={showModal}>Contact</button>
            </nav>
        </>
    )
}

export default Nav;
