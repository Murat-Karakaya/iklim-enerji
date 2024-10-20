import Nav from "./components/nav/nav";
import PageContainer from "./components/pageContainer/pageContainer";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "./jotai/atoms";

import Renewables from "./pageContents/Renewables/Renewables";
import Nukleer from "./pageContents/Nukleer/Nukleer";
import About from "./pageContents/About/About";
import Fosil from "./pageContents/Fosil/Fosil";
import { useState } from "react";




export default () => {
    const isDarkMode = useAtomValue(darkModeAtom)
    const [isBrave, setIsBrave] = useState(false)

    useEffect(() => {
        function isBraveBrowser() {
            return new Promise((resolve) => {
                // Check if the navigator object has the brave property
                if (navigator.brave) {
                    navigator.brave.isBrave().then((isBrave) => {
                        resolve(isBrave);
                    });
                } else {
                    resolve(false);
                }
            });
        }
          
        isBraveBrowser().then((isBrave) => {
            setIsBrave(isBrave)
        });
    })


    useEffect(() => {
        const rootElement = document.getElementById('root')
        const setRootProperty = (property, value) => rootElement.style.setProperty(property, value);
        
        if (isDarkMode) {
            setRootProperty('--page-line', '#e8e8e8')
            setRootProperty('--default-block-background-color', '#22272E')
            setRootProperty('--nav-button-color', 'black')
            setRootProperty('--custom-blue-line', '#00cfde')
            return;
        }
        setRootProperty('--page-line', 'rgb(10, 5, 0)')
        setRootProperty('--default-block-background-color', '#e8e8e8')
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

    if (!isBrave) {
    return(
        <>
            <Nav/>
            <PageContainer>
                <About />
                <Renewables />
                <Nukleer />
                <Fosil />
            </PageContainer>
        </>
    )    
    }
    return (
        <div>Sorry! brave browser is not supported :(</div>
    )
}