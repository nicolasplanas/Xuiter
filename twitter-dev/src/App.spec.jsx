import '@testing-library/jest-dom';
import { expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

// eslint-disable-next-line no-undef
describe('App', ()=> {
    // eslint-disable-next-line no-undef
    test('should render correctly', () =>{
        render(<App />)

        expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument();
    })
});