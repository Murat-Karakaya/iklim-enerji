import "../../pageContents/pageStyles.css";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { pageAtom } from "../../jotai/atoms";

import Page from "./page";

const stringOfFocusables = 'a:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), iframe:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex="0"]'

const PageContainer=({children})=>{
    const pageId=useAtomValue(pageAtom)

    useEffect(() => {
        for (const element of document.querySelectorAll('[aria-hidden="true"]')) {
            const focusables = element.querySelectorAll(stringOfFocusables)
            for (const el of focusables) {
                el.setAttribute('tabindex', -1)
                el.setAttribute('data-page-container-hidden', "true")
            }
        }

        for (const element of document.querySelectorAll('[aria-hidden="false"]')) {
            const focusables = element.querySelectorAll(stringOfFocusables)
            for (const el of focusables) {
                el.setAttribute('tabindex', 0)
                el.setAttribute('data-page-container-hidden', "false")
            }
        }
    }, [])

    useEffect(() => {
        /* aria-hidden = true elements should not have focusable descendents */
        /* aria-hidden = false elements can have focusable descendents */

        for (const element of document.querySelectorAll('[aria-hidden="true"]')) {
            const focusables = element.querySelectorAll('[data-page-container-hidden="false"]')
            for (const el of focusables) {
                el.setAttribute('tabindex', -1)
                el.setAttribute('data-page-container-hidden', "true")
            }
        }

        for (const element of document.querySelectorAll('[aria-hidden="false"]')) {
            const focusables = element.querySelectorAll('[data-page-container-hidden="true"]')
            for (const el of focusables) {
                el.setAttribute('tabindex', 0)
                el.setAttribute('data-page-container-hidden', "false")
            }
        }

        /* Other stuff */
        const currentPage = document.getElementById("page" + pageId);
        currentPage.scrollIntoView({ behavior: "smooth" })

        const adjustPage=()=>currentPage.scrollIntoView()
        globalThis.addEventListener('resize',adjustPage);

        return(() => {
            globalThis.removeEventListener('resize',adjustPage)
        })
    }, [pageId])

    return(
        <div id="pageContainer">
            {children.map((el, id) => <Page id={id} key={id}>{el}</Page>)}
        </div>
    )
}
export default PageContainer