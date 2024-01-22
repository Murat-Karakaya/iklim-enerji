import Nav from "./components/nav/nav";
import PageContainer from "./components/pageContainer/pageContainer";
import ContactForm from "./components/modal/modal"
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "./jotai/atoms";

import BackEnd from "./pageContents/Back-End";
import FrontEnd from "./pageContents/Front-End";
import Education from "./pageContents/Education";
import About from "./pageContents/About";




export default () => {
    const isDarkMode = useAtomValue(darkModeAtom)

    useEffect(() => {
        const rootElement = document.getElementById('root')
        const setRootProperty = (property, value) => rootElement.style.setProperty(property, value);
        
        if (isDarkMode) {
            setRootProperty('--page-line', 'white')
            setRootProperty('--default-block-background-color', '#22272E')
            setRootProperty('--nav-button-color', 'black')
            setRootProperty('--custom-blue-line", "#00eeff')
            return;
        }
        setRootProperty('--page-line', 'rgb(10, 5, 0)')
        setRootProperty('--default-block-background-color', 'white')
        setRootProperty('--nav-button-color', 'white')
        setRootProperty('--custom-blue-line', '#195aff')
        return;
    }, [isDarkMode])

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