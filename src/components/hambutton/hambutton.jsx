import "./hambutton.css";
const Hambutton =({clickHandler})=>{
    return(
        <div id="hambutton">
            <button aria-label="hamburger button" onClick={clickHandler} id="menu" >
                <span id="line"></span>
            </button>
        </div>
    )
}
export default Hambutton;