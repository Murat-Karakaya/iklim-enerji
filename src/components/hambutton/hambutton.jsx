import { useAtom } from "jotai";
import { darkModeAtom } from "../../jotai/atoms";

const Hambutton =({clickHandler})=>{
    const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom)
    return(
        <div id="hambutton">
            <button aria-label="hamburger button" onClick={clickHandler} id="menu" >
                <span id="line"></span>
            </button>

            <button id="ham-end"  onClick={() => setIsDarkMode(!isDarkMode)}>
                <img
                 height={40} 
                 width={"auto"} 
                 loading="lazy"
                 src={isDarkMode ? "light-dark-mode/sun.svg" : "light-dark-mode/moon.svg"}
                />
            </button>
        </div>
    )
}
export default Hambutton;