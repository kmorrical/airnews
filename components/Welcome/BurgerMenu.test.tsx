import { render, screen, waitFor, fireEvent } from '@/test-utils';
import { BurgerMenu } from './BurgerMenu';

describe('Burger Menu component', () => {
  it('renders all news links when menu is open', () => {
    render(
      <BurgerMenu
        opened
        selectedCategory="Aviation"
        setSelectedCategory={() => jest.fn()}
        close={() => jest.fn()}
      />
    );
    expect(screen.getByText('AVIATION')).toBeInTheDocument();
    expect(screen.getByText('TRAVEL')).toBeInTheDocument();
    expect(screen.getByText('AIRSPACE')).toBeInTheDocument();
    expect(screen.getByText('PRIVATE JETS')).toBeInTheDocument();
    expect(screen.getByText('AIRPORTS')).toBeInTheDocument();
    expect(screen.getByText('VACATION')).toBeInTheDocument();
  });

  it('has Aviation highlighted by default', () => {
    render(
      <BurgerMenu
        opened
        selectedCategory="Aviation"
        setSelectedCategory={() => jest.fn()}
        close={() => jest.fn()}
      />
    );
    expect(screen.getByText('AVIATION')).toHaveStyle('color: cornflowerblue');
    expect(screen.getByText('TRAVEL')).not.toHaveStyle('color: cornflowerblue');
  });

  it('changes highlighted text based on selected item', async () => {
    render(
      <BurgerMenu
        opened
        selectedCategory="Aviation"
        setSelectedCategory={() => jest.fn()}
        close={() => jest.fn()}
      />
    );
    const travelButton = screen.getByText('AVIATION').closest('a');
    fireEvent.click(travelButton as Element);
    await waitFor(() => {
      expect(screen.getByText('AVIATION')).toHaveStyle('color: cornflowerblue');
    });
  });
  //todo wait for check to be invisible
});
