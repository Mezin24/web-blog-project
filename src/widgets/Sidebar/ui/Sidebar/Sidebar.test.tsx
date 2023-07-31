import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapse sidebar', () => {
    componentRender(<Sidebar />);
    const collapseBtn = screen.getByTestId('collapsed_btn');
    fireEvent.click(collapseBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
