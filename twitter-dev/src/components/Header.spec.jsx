import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { describe, test, expect } from 'vitest';

describe('Header', () => {
    test('should render correctly with the title "Xuiter"', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText("Xuiter")).toBeInTheDocument();
    });

    test('should contain a link to the home page', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const homeLink = screen.getByRole('link', { name: /xuiter/i });
        expect(homeLink).toHaveAttribute('href', '/');
    });
});