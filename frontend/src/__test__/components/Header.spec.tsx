
import { getByText, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NavBar from '../../components/Layout/Navbar'; 

describe("Navbar", () => {
    it("Should be able to show the Navbar element", () => {

        const history = createMemoryHistory();
        const route = '/';
        history.push(route);

        const { getByText } = render(
            <Router history={history}>
                <NavBar title="Movies"/>
            </Router>
        );

        const title = getByText('Movies');
        expect(title).toBeTruthy();
    })
})