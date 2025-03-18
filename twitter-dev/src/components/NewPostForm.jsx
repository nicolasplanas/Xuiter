import './NewPostForm.css';

import { Send } from '@mui/icons-material';
import { Textarea } from '@mui/joy';
import { Button } from '@mui/joy';
import { useState, useContext } from 'react';
import { PostContext } from '../contexts/PostContext';

export default function NewPostForm() {
    const [content, setContent] = useState('')

    const { createPost } = useContext(PostContext)

    const handleChangeContent = (event) => {
        setContent(event.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        createPost(content)
    }

    return (
        <>
            <form className="new-post" onSubmit={handleFormSubmit}>
                <Textarea className="input" value={content} onChange={handleChangeContent} minRows={3} placeholder='No que você está pensando?' />
                <Button
                    type='submit'
                    variant='outlined'
                    size='lg'
                    startDecorator={<Send />}>
                    Enviar
                </Button>   
            </form>
        </>
    )
}