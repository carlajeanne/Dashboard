'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Callout, TextArea, Button, Text } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import "easymde/dist/easymde.min.css"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchema'
import {z} from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage'
import { Spinner } from '@/app/components/Spinner'

type IssueFormData = z.infer<typeof createIssueSchema> ;

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: {errors} } = useForm<IssueFormData>({
        resolver: zodResolver(createIssueSchema)
    })
    const [error, setError] = useState(''); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div>
            {error && 
                <Callout.Root color="red" className="mb-4">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            }
            <form
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
            onSubmit={handleSubmit(async (data) => {
                setIsSubmitting(true);
                try {
                await axios.post('/api/issues', data);
                router.push('/issues');
                } catch (error) {
                setError('An unexpected error occurred. Try again later.');
                } finally {
                setIsSubmitting(false);
                }
            })}
            >
                <h1 className="text-2xl font-semibold mb-4">Create New Issue</h1>

                <TextArea
                    {...register('title')}
                    placeholder="Issue Title"
                    rows={1}
                    className="w-full p-2 border rounded-lg"
                />
                <ErrorMessage >
                    {errors.title?.message}
                </ErrorMessage>
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
                <ErrorMessage >
                    {errors.description?.message}
                </ErrorMessage>
                <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700"
                disabled={isSubmitting}
                >
                    Submit New Issue {isSubmitting && <Spinner />}
                </Button>
            </form>
        </div>
    )
}

export default NewIssuePage
