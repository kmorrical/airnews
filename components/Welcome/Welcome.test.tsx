import { render, screen, userEvent } from '@/test-utils';
import { Welcome } from './Welcome';
import { mockData } from '@/test-utils/mockData';

describe('Welcome component', () => {
  it('renders correct text and link in title and subtitle', () => {
    render(<Welcome articles={mockData} />);
    expect(screen.getByText('JetStream')).toBeInTheDocument();
    expect(screen.getByText('News Powered by')).toBeInTheDocument();
    expect(screen.getByTestId('goodwin-link')).toHaveAttribute(
      'href',
      'https://www.hellogoodwin.com/'
    );
  });

  it('renders correct amount of cards', () => {
    render(<Welcome articles={mockData} />);
    expect(screen.getAllByTestId('article-card').length).toBe(3);
  });

  it('opens and renders menu when burger menu when burger is clicked', async () => {
    render(<Welcome articles={mockData} />);

    const buttonElement = screen.getByTestId('burger-button');
    await userEvent.click(buttonElement);

    const panelElement = screen.getByTestId('burger-menu');
    expect(panelElement).toBeVisible();
    expect(panelElement).toHaveClass('hamburger-panel-opened');

    await userEvent.click(buttonElement);
    expect(panelElement).toHaveClass('hamburger-panel-closed');
  });
});
