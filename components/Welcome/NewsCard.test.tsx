import { render, screen } from '@/test-utils';
import { NewsCard } from './NewsCard';
import { mockData } from '@/test-utils/mockData';

describe('Card component', () => {
  it('renders all information for card', () => {
    render(<NewsCard article={mockData[0]} setSelectedArticle={() => jest.fn()} />);
    expect(screen.getByText('Private jets for WNBA teams')).toBeInTheDocument();
    expect(screen.getByText('Article 1 summary')).toBeInTheDocument();
    expect(screen.getByText('U.S.')).toBeInTheDocument();
    expect(screen.getByText('SPORTS')).toBeInTheDocument();
    const image = screen.getByAltText('big airplane');
    expect(image).toHaveAttribute(
      'src',
      'http://www.nytimes.com/https://assets-global.website-files.com/660dd07c32…02702f43de6e_Goodwin-Logo_Emerald%20(5)-p-500.png'
    );
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });
  it('renders airplane image if no multimedia for card', () => {
    render(<NewsCard article={mockData[1]} setSelectedArticle={() => jest.fn()} />);
    expect(screen.queryByTestId('article-image')).toBeNull();
    expect(screen.getByTestId('article-placeholder-icon')).toBeInTheDocument();
  });
  it('does not render subsection tag if no subsection', () => {
    render(<NewsCard article={mockData[1]} setSelectedArticle={() => jest.fn()} />);
    expect(screen.queryByTestId('subsection_badge')).toBeNull();
  });
});
