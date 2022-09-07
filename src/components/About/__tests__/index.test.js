import React from 'react';
import About from '..';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
afterEach(cleanup);

describe('About component', () => {
    // renders About Test First Test
    it('renders', () => {
        render(<About />);
    })
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render ABout
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})