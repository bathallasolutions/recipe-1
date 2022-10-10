import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Home', () => {
  it('renders a heading', () => {
    const initialState = { counter: {value: 1} };
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    );

    const heading = screen.getByRole('heading', {
      name: /Counter/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
