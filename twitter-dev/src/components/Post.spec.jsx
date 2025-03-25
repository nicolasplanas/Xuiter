import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Post from './Post'
import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

describe('Post', () => {
    test('should render correctly', () => {
        const post = {
            id: 1,
            author: 'Nicolas',
            content: 'Hello, Vitest!',
            starCount: 1
        }

        render(
        <BrowserRouter>
            <Post post={post} />
        </BrowserRouter>
        )

        expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument();
    });
});