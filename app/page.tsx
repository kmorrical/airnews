import { getData } from '@/utils/dataFetching';
import { Welcome } from '../components/Welcome/Welcome';
import '../styles/styles.css';
// import { Loading } from '@/components/Loading';

//todo kate add error handling

//todo kate eslinter
//todo kate readme
//todo kate test button click
//todo kate test on other maching

export default async function HomePage() {
  const formattedData = await getData('Aviation');
  return (
    <div className="home-container" data-testid="home-page">
      <Welcome articles={formattedData} />
    </div>
  );
}
