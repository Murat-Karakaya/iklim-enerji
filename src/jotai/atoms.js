import { atom } from "jotai";

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const pageAtom = atom(4)
const modalAtom = atom(false)
const darkModeAtom = atom(darkModeQuery.matches)

export { pageAtom, modalAtom, darkModeAtom };