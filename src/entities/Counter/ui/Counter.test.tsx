import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
  });

  test('should decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId('decrement_btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
  });

  test('should increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId('increment_btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
  });
});
