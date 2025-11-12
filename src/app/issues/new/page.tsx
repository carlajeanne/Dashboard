'use client'

import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes'

const NewIssuePage = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Create New Issue</h1>
            <TextArea
                placeholder="Issue Title"
                rows={1}
                className="w-full p-2 border rounded-lg"
            />
            <TextArea 
                placeholder="Description"
                rows={6}
                className="w-full mt-4 p-2 border rounded-lg"
            />
            <Button className='p-5 m-4 justify-items-center'>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage
