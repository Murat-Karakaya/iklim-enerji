import { useAtom } from "jotai"
import { pageAtom } from "../../jotai/atoms"

const Page=({children, id})=>{
    const [currentPage]=useAtom(pageAtom)
    return(
        <div aria-hidden={String(currentPage!=id)}
         id={"page"+id}
         className="page">
            <div className="page-child custom-scrollbar">
                {children}
            </div>
        </div>
    )
}
export default Page