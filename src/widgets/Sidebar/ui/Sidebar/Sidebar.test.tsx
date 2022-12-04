import { fireEvent, screen } from '@testing-library/react';
import
renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar test', () => {
    test('render bar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('render collapsed', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
