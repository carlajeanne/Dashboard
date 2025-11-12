'use client'

import dynamic from 'next/dynamic'
import { TextArea, Button } from '@radix-ui/themes'
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

    return (
        <form
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        onSubmit=
            {handleSubmit(async (data) => 
                await axios.post('/api/issues', data).then(() => {
                    router.push('/issues');
                }).catch(() => {
                    alert('Failed to create issue.')
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
    )
}

export default NewIssuePage
