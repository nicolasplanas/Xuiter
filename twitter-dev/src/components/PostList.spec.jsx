import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { PostContext } from '../contexts/PostContext';
import PostList from './PostList';
import { describe, test, expect } from 'vitest';

describe('PostList', () => {
    test('should render posts correctly', () => {
        const mockPosts = [
            { id: 1, content: 'Post 1' },
            { id: 2, content: 'Post 2' },
        ];

        render(
            <MemoryRouter>
                <PostContext.Provider value={{ posts: mockPosts }}>
                    <PostList />
                </PostContext.Provider>
            </MemoryRouter>
        );

        mockPosts.forEach(post => {
            expect(screen.getByText(post.content)).toBeInTheDocument();
        });
    });
});