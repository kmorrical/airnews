// put this component in a util since it is used in two places

export async function getData(category: string) {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=DfG8U4C3JJoRA5WhiqwzRgT2yU8rP90n`
  );
  if (!res.ok) {
    throw new Error('failed to Fetch API data');
  }
  const data = await res.json();
  return data.response.docs;
}
