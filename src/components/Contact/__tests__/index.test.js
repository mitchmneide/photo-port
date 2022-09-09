import React from 'react';
import ContactForm from '..';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
describe('Contact component renders', () => {
    it('renders', () => {
    render(<ContactForm />);
  });
  
    // eslint-disable-next-line jest/no-identical-title
    it('renders', () => {
      const { asFragment } = render(<ContactForm />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
  
  
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
   
  // eslint-disable-next-line jest/no-identical-title
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })