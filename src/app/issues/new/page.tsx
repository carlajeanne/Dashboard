'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Callout, TextArea, Button } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css"
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

interface IssueFormData {
    title: string
    description: string
}

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueFormData>()
    const [error, setError] = useState(''); 

    return (
        <div>
            {error && 
                <Callout.Root color="red" className="mb-4">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            }
            <form
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
            onSubmit=
                {handleSubmit(async (data) => 
                    await axios.post('/api/issues', data).then(() => {
                        router.push('/issues');
                    }).catch((error) => {
                        setError('An unexpected error occured. Try again later.')
                    })
                )}
            >
                <h1 className="text-2xl font-semibold mb-4">Create New Issue</h1>

                <TextArea
                    {...register('title')}
                    placeholder="Issue Title"
                    rows={1}
                    className="w-full p-2 border rounded-lg"
                />

                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                    <SimpleMDE
                        {...field}
                        placeholder="Description"
                        className="w-full mt-4 p-2 border rounded-lg"
                    />
                    )}
                />

                <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700">
                    Submit New Issue
                </Button>
            </form>
        </div>
    )
}

export default NewIssuePage
