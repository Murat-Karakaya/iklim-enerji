import { useAtomValue } from "jotai"
import { pageAtom } from "../../jotai/atoms"

const Page=({children, id})=>{
    const currentPage =useAtomValue(pageAtom)
    return(
        <div aria-hidden={String(currentPage!=id)}
         tabIndex={-1}
         id={"page"+id}
         className="page">
            <div tabIndex={-1} className="page-child custom-scrollbar"> {/* Added this child element to get rid of an annoying scrolling bug */}
                {children}
            </div>
        </div>
    )
}
export default Page