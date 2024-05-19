import { render, screen } from '@/test-utils';
import HomePage from './page';
// export function mockFetch(data: any) {
//   return jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => data,
//     })
//   );
// }
describe('Home', () => {
  it('should have rendered', () => {
    render(<HomePage />);

    const myElem = screen.getByTestId('home-page');

    expect(myElem).toBeInTheDocument();
  });
});
