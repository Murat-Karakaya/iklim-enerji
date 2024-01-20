import { useEffect } from "react";
import { modalAtom } from "../../jotai/atoms";
import { useAtom } from "jotai"
import "./formStyle.css";
const ContactForm=()=>{
    const [visible, changeVisibility]=useAtom(modalAtom);
    const closeModal=()=>{
        changeVisibility(false)
    }

    useEffect(()=>{
        const modal=document.querySelector("#contactForm")
        if (visible) {
            modal.showModal()
            return;
        }
        modal.close()
    },[visible])

    return(
        <dialog id="contactForm" onCancel={closeModal}>
            <button className="button-x" onClick={closeModal}></button>
        </dialog>
    )
}
export default ContactForm;