import { atom } from "jotai";

const darkModeQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');

function checkBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (userAgent.includes('firefox')) return "firefox"
    if (userAgent.includes('chrome')) return "chromium"
    if (userAgent.includes('webkit')) return "webkit"
    return "unknown"
}

const browserTypeAtom = atom(checkBrowser)
const pageAtom = atom(0)
const darkModeAtom = atom(darkModeQuery.matches)

export { pageAtom, darkModeAtom, browserTypeAtom };