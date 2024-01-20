import "../../pageContents/pageStyles.css";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../../jotai/atoms";

import Page from "./page";

const PageContainer=({children})=>{
    const [pageId]=useAtom(pageAtom)
    useEffect(()=>{
        /* aria-hidden = true elements should not have focusable descendents */
        /* aria-hidden = false elements can have focusable descendents */

        const setAriaHiddenDescendents = (parent, value) => {
            for (const element of parent) {
                let focusables = element.querySelectorAll('button, input, select, textarea, a')
                for (const el of focusables) el.setAttribute('tabindex', value)
            }
        }
        const ariaHiddenelements = document.querySelectorAll('[aria-hidden="true"]');
        const notAriaHiddenelements = document.querySelectorAll('[aria-hidden="false"]');

        setAriaHiddenDescendents(ariaHiddenelements , "-1")
        setAriaHiddenDescendents(notAriaHiddenelements, "0")

        /* Other stuff */
        const currentPage=document.getElementById("page"+pageId)
        currentPage.scrollIntoView({behavior:"smooth"})

        const adjustPage=()=>currentPage.scrollIntoView()
        window.addEventListener('resize',adjustPage);

        return(()=>{
            window.removeEventListener('resize',adjustPage)
        })
    },[pageId])

    return(
        <div id="pageContainer">
            {children.map((el, id) => <Page id={id} key={id}>{el}</Page>)}
        </div>
    )
}
export default PageContainer