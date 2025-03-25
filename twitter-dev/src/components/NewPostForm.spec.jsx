import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import NewPostForm from './NewPostForm'
import { describe, test, vi } from 'vitest'
import { expect } from '@storybook/test'
import { PostContext } from '../contexts/PostContext';

const createPost = vi.fn()

const renderNewPostForm = () => {
    return render(
        <PostContext.Provider value={{ createPost }}>
            <NewPostForm />
        </PostContext.Provider>
    )
}

describe('NewPostForm', () => {
    test('should render correctly', () => {
        renderNewPostForm()

        expect(screen.getByPlaceholderText('No que você está pensando?')).toBeInTheDocument()
    })

    test('should not create a post when input field is empty', () => {
        const { getByText } = renderNewPostForm()

        const enviarButton = getByText('Enviar')
        expect(enviarButton).toBeInTheDocument()

        fireEvent.click(enviarButton)

        expect(createPost).toHaveBeenCalledTimes(0)
    })

    test('should create a post when input filed is filled', () => {
        const { getByText, getByPlaceholderText } = renderNewPostForm()

        const enviarButton = getByText('Enviar')
        const inputField = getByPlaceholderText('No que você está pensando?')

        expect(enviarButton).toBeInTheDocument()
        expect(inputField).toBeInTheDocument()

        fireEvent.change(inputField, { target: { value: 'Hello!' } })
        expect(enviarButton).not.toBeDisabled()
        
        fireEvent.click(enviarButton)      
        expect(createPost).toHaveBeenCalledTimes(1)

        expect(inputField.value).toBe('')
    })
});