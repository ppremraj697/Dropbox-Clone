"use client"

import { db, storage } from '@/firebase';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import DropzoneComponent from 'react-dropzone'

const Dropzone = () => {

    const [loading, setLoading] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = async () => {
                await uploadPost(file);
            };
            reader.readAsArrayBuffer(file);
        })
    }

    const uploadPost = async (selectedFile: File) => {
        if (loading) return;
        if (!user) return;

        setLoading(true);

        // addDoc -> users/user12345/files
        const docRef = await addDoc(collection(db, "users", user.id, "files"), {
            userId: user.id,
            fileName: selectedFile.name,
            fullName: user.fullName,
            profileImg: user.imageUrl,
            timestamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size,
        })

        const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

        uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
                downloadURL: downloadURL,
            });
        });

        setLoading(false);
    }

    //max file size 20MB
    const maxSize = 20971520;

    return (
        <div>
            <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => {

                    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

                    return (
                        <section className='m-4'>
                            <div {...getRootProps()} className={cn("w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center", isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-200/100 dark:bg-slate-800/80 text-slate-500")}>
                                <input {...getInputProps()} />
                                {!isDragActive && "Click here or drop a file to upload!"}
                                {isDragActive && !isDragReject && "Drop to upload this file!"}
                                {isDragReject && "File type not accepted, sorry!"}
                                {isFileTooLarge && (<div className='text-danger mt-2'>File is too large.</div>)}
                            </div>
                        </section>
                    )
                }}
            </DropzoneComponent>
        </div>
    )
}

export default Dropzone
