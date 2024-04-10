import "./navstyle.css";
import Navbutton from "../navbutton/navbutton";
import Hambutton from "../hambutton/hambutton";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../jotai/atoms";

const Nav=()=> {
    const navElement = useRef(null)
    const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom)
    const [ smallNavVis, setSmallNavVis ] = useState(false)

    useEffect(()=>{
        if(window.innerWidth >= 770 || smallNavVis) return

        setTimeout(() => {
            navElement.current.style.display = "none"
        }, 200)
    }, [smallNavVis])

    const hamClicked = () => {
        navElement.current.style.display = "block"
        setTimeout(()=> setSmallNavVis(true), 0)
    }

    const hideNav = () => setSmallNavVis(false)
    
    const buttonValues = [ "Anasayfa", "Yenilenebilir Enerji", "Nükleer Enerji" , "Fosil Yakıt" ]
    return(
        <>
            <Hambutton clickHandler={hamClicked}/>
            <nav ref={navElement} id="main-nav" style={{left: smallNavVis ? 0 : -200}}>
                <button
                 aria-label="close-Navigation"
                 onClick={hideNav} 
                 id="nav-x" 
                 className="button-x" 
                />
                
                {buttonValues.map(
                    (value,i) => <Navbutton key={value} id={i} >{value}</Navbutton>
                )}

                <button
                 id="nav-end" 
                 onClick={() => setIsDarkMode(!isDarkMode)}
                 aria-label={isDarkMode ? "use dark mode" : "use light mode"}
                >
                    <img
                     height={40} 
                     width={"auto"}
                     alt={isDarkMode ? "sun image" : "moon image"}
                     src={isDarkMode ? "light-dark-mode/sun.svg" : "light-dark-mode/moon.svg"}
                    />
                </button>
            </nav>
        </>
    )
}

export default Nav;
