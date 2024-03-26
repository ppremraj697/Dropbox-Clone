"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useAppStore } from "@/store/store"

export function DeleteModal() {

    const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
        useAppStore((state) => [
            state.isDeleteModalOpen,
            state.setIsDeleteModalOpen,
            state.fileId,
            state.setFileId,
        ]);

    async function deleteFile() { }

    return (
        <Dialog
            open={isDeleteModalOpen}
            onOpenChange={(isOpen) => {
                setIsDeleteModalOpen(isOpen);
            }}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your file!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex space-x-2 py-3">
                    <Button size="sm" className="px-3 flex-1" variant={"ghost"} onClick={() => setIsDeleteModalOpen(false)}>
                        <span className="sr-only">Cancel</span>
                        <span>Cancel</span>
                    </Button>

                    <Button type="submit" size="sm" className="px-3 flex-1" onClick={() => deleteFile()}>
                        <span className="sr-only">Delete</span>
                        <span>Delete</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default DeleteModal
