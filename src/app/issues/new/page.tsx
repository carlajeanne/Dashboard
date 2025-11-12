'use client'

import React from 'react'
import { TextArea, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

const NewIssuePage = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Create New Issue</h1>
            <TextArea
                placeholder="Issue Title"
                rows={1}
                className="w-full p-2 border rounded-lg"
            />
            <SimpleMDE 
                placeholder="Description"
                className="w-full mt-4 p-2 border rounded-lg"
            />
            <Button className='p-5 m-4 justify-items-center'>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage
