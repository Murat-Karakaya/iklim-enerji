import "./navstyle.css";
import Navbutton from "../navbutton/navbutton";
import Hambutton from "../hambutton/hambutton";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../jotai/atoms";

const Nav=()=> {
    const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom)
    const [ smallNavVis, setSmallNavVis ] = useState(false)

    useEffect(()=>{
        if(window.innerWidth >= 800 || smallNavVis) return

        setTimeout(()=>{
            document.querySelector("nav").style.display="none"
        },200)
    }, [smallNavVis])

    const hamClicked = ()=> {
        document.querySelector("nav").style.display = "block"
        setTimeout(()=> setSmallNavVis(true), 0)
    }

    const hideNav = () => setSmallNavVis(false)
    
    const buttonValues = ["Anasayfa", "Rüzgar Enerjisi", "Hidrolik Enerji", "Nükleer Enerji"/* , "Fosil Yakıt" */]
    return(
        <>
            <Hambutton clickHandler={hamClicked}/>
            <nav className={smallNavVis ? "navVis" : ""}>
                <button
                 aria-label="close-Navigation"
                 onClick={hideNav} 
                 id="nav-x" 
                 className="button-x" 
                />
                
                {buttonValues.map(
                    (value,i) => <Navbutton key={value} id={i} >{value}</Navbutton>
                )}

                <button id="nav-end"  onClick={() => setIsDarkMode(!isDarkMode)}>
                    <img
                     height={40} 
                     width={"auto"} 
                     loading="lazy"
                     src={isDarkMode ? "light-dark-mode/sun.svg" : "light-dark-mode/moon.svg"}
                    />
                </button>
            </nav>
        </>
    )
}

export default Nav;
