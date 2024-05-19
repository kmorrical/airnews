// import { Suspense } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import '../styles/styles.css';
// import { Loading } from '@/components/Loading';

//todo kate add error handling

//todo kate eslinter
//todo kate readme
//todo kate more fetching
//todo kate test button click
//todo kate test fetching and data change
//todo kate git

async function getData() {
  const res = await fetch(
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=aviation&api-key=DfG8U4C3JJoRA5WhiqwzRgT2yU8rP90n'
  );
  if (!res.ok) {
    throw new Error('failed to Fetch API data');
  }
  return res.json();
}

export default async function HomePage() {
  const myData = await getData();
  const formattedData = myData.response.docs;
  return (
    <div className="home-container" data-testid="home-page">
      <Welcome articles={formattedData} />
    </div>
  );
}
