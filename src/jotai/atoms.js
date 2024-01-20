import { atom } from "jotai";

const pageAtom = atom(0)
const modalAtom = atom(false)
const darkModeAtom = atom(true)

export {pageAtom, modalAtom, darkModeAtom};