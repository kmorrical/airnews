'use client';

import { Title, Text, Grid, Burger } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { NewsCard } from './NewsCard';
import { Article } from '@/types/Article';
import { MoreInfoModal } from './MoreInfoModal';
import { GoodwinLogoAnchor } from './GoodwinLogoAnchor';
import { BurgerMenu } from './BurgerMenu';
import { getData } from '@/utils/dataFetching';

interface Props {
  articles: Article[];
}

export function Welcome(props: Props) {
  const [burgerOpened, { close, toggle }] = useDisclosure();
  // add media query for making styles more response
  const isAboveXs = useMediaQuery('(min-width: 480px)');
  // use this hook/state object to:
  // (a) push data into modal
  // (b) check if modal is open/closed
  const [selectedModalArticle, setSelectedModalArticle] = useState<Article | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string>('Aviation');
  // prefill below state object with data from first fetch (from server)
  const [articleData, setArticleData] = useState(props.articles);
  // is loading allows us to set loading styles on card container
  const [isLoading, setIsLoading] = useState(false);

  // fetch data client side when user changes article category
  const fetchData = async (category: string) => {
    const newData = await getData(category);
    setIsLoading(false);
    return setArticleData(newData);
  };

  // clicking item in hamburger menu:
  // (a) changes styles for item in menu (changes text color)
  // (b) sets loading state (opacity dropped on old data)
  // (c) disables button clicks on old data
  // (d) fetches new data
  // (e) closes hamburger menu
  const handleItemClick = (category: string) => {
    setSelectedCategory(category);
    setIsLoading(true);
    fetchData(category);
    close();
  };

  return (
    <>
      <Title className="title" ta="center" pt={70}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'cornflowerblue', to: 'darkblue' }}
          fs="italic"
          pr={2}
        >
          JetStream
        </Text>
      </Title>
      <div className="subtitle-container">
        <div>
          <Burger
            opened={burgerOpened}
            onClick={toggle}
            aria-label="Toggle navigation"
            data-testid="burger-button"
          />
          <Text c="white" ta="center" size="lg" maw={580} ml={16} mr={8}>
            {isAboveXs && "Today's Aviation"} News Powered by{' '}
          </Text>
        </div>
        <GoodwinLogoAnchor />
      </div>
      <BurgerMenu
        opened={burgerOpened}
        selectedCategory={selectedCategory}
        handleItemClick={handleItemClick}
      />
      <div
        className={`card-container ${isLoading && 'card-container-loading'}`}
        data-testid="card-container"
      >
        <Grid>
          {articleData &&
            articleData.length > 0 &&
            articleData.map((item: Article, index: number) => (
              <Grid.Col span={{ xs: 12, sm: 6, lg: 3 }} key={index} data-testid="article-card">
                <NewsCard
                  article={item}
                  setSelectedArticle={() => setSelectedModalArticle(item)}
                  isDisabled={isLoading}
                />
              </Grid.Col>
            ))}
        </Grid>
      </div>
      <MoreInfoModal
        close={() => setSelectedModalArticle(undefined)}
        article={selectedModalArticle}
      />
    </>
  );
}
