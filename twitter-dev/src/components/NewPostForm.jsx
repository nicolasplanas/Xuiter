import './NewPostForm.css';
import { Textarea } from '@mui/joy';
import { useState, useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import PrimaryButton from './PrimaryButton';

export default function NewPostForm() {
    const [content, setContent] = useState('');

    const { createPost } = useContext(PostContext);

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (content.trim().length > 0) {
            createPost(content);
            setContent('');
        }
    }

    const isDisable = () => {
        return content.length == 0
    }

    return (
        <form className="new-post" onSubmit={handleFormSubmit}>
            <Textarea className="input" value={content} onChange={handleChangeContent} minRows={3} placeholder='No que você está pensando?' />
            
            <PrimaryButton label="Enviar" disabled={isDisable()} />
        </form>
    );
}