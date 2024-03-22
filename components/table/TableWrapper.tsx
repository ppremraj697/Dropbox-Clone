import { FileType } from "@/typings"
import { Button } from "../ui/button"

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
    return (
        <div>
            <Button>Sort By...</Button>
        </div>
    )
}

export default TableWrapper
