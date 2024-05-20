import { render, screen } from '@/test-utils';
import HomePage from './page';
describe('Home', () => {
  it('should have rendered', () => {
    render(<HomePage />);

    const myElem = screen.getByTestId('home-page');

    expect(myElem).toBeInTheDocument();
  });
});
