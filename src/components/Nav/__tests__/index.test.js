import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();
afterEach(cleanup);
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected} />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange 
        const { getByLabelText } = render(<Nav
            categories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);

        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        // Assert
    });
})
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav
            categories={categories}
            mockSetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory} 
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}/>);
            
        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})