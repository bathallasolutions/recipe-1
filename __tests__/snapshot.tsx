import { render } from '@testing-library/react'
import Home from '@/pages/index'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

it('renders homepage unchanged', () => {
  const initialState = { counter: {value: 1} };
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);
  const { container } = render(
      <Provider store={store}>
          <Home />
      </Provider>
  );
  expect(container).toMatchSnapshot()
})
