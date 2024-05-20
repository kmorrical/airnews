import { getData } from '@/utils/dataFetching';
import { Welcome } from '../components/Welcome/Welcome';
import '../styles/styles.css';

export default async function HomePage() {
  // fetch data server side
  const formattedData = await getData('Aviation');
  return (
    <div data-testid="home-page">
      <Welcome articles={formattedData} />
    </div>
  );
}
