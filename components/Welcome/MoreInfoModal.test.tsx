import { render, screen } from '@/test-utils';
import { NewsCard } from './NewsCard';
import { mockData } from '@/test-utils/mockData';
import { MoreInfoModal } from './MoreInfoModal';

describe('More Info Modal component', () => {
  it('renders all information for article modal', () => {
    render(<MoreInfoModal article={mockData[0]} close={() => jest.fn()} />);
    expect(screen.getByText('Private jets for WNBA teams')).toBeInTheDocument();
    expect(screen.getByText('Article 1 summary')).toBeInTheDocument();
    const image = screen.getByAltText('big airplane');
    expect(image).toHaveAttribute(
      'src',
      'http://www.nytimes.com/https://assets-global.website-files.com/660dd07c32…02702f43de6e_Goodwin-Logo_Emerald%20(5)-p-500.png'
    );
    const link = screen.getByText('The New York Times').closest('a');
    expect(link).toHaveAttribute('href', 'Google.com');
  });
  it('does not render author if no original byline', () => {
    render(<MoreInfoModal article={mockData[1]} close={() => jest.fn()} />);
    expect(screen.queryByTestId('byline-text')).toBeNull();
  });
  it('renders author if original byline', () => {
    render(<MoreInfoModal article={mockData[2]} close={() => jest.fn()} />);
    expect(screen.getByTestId('byline-text')).toBeInTheDocument();
  });
  it('does not render image if no image', () => {
    render(<NewsCard article={mockData[3]} setSelectedArticle={() => jest.fn()} />);
    expect(screen.queryByTestId('modal-image')).toBeNull();
  });
});
