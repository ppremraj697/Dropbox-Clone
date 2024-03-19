import React from 'react'
import { auth } from "@clerk/nextjs"
import Dropzone from '@/components/Dropzone';


const Dashboard = () => {

    const { userId } = auth();

    return (
        <div>
            <Dropzone/>
        </div>
    )
}

export default Dashboard