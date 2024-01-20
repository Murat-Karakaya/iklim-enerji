import Nav from "./components/nav/nav";
import PageContainer from "./components/pageContainer/pageContainer";
import ContactForm from "./components/modal/modal"
import { useEffect } from "react";

import BackEnd from "./components/pageContents/Back-End";
import FrontEnd from "./components/pageContents/Front-End";
import Education from "./components/pageContents/Education";
import About from "./components/pageContents/About";



export default () => {
    useEffect(() => {
        const observer =new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                    observer.disconnect();
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".reveal")
        hiddenElements.forEach(el => observer.observe(el))
    }, [])
    return(
        <>
            <Nav/>
            <PageContainer>
                <About />
                <FrontEnd />
                <BackEnd />
                <Education />
            </PageContainer>
            <ContactForm/>
        </>
    )
}