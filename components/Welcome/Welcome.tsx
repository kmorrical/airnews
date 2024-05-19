'use client';

import { Title, Text, Grid, Burger } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { NewsCard } from './NewsCard';
import { Article } from '@/types/Article';
import { MoreInfoModal } from './MoreInfoModal';
import { GoodwinLogoAnchor } from './GoodwinLogoAnchor';
import { BurgerMenu } from './BurgerMenu';

interface Props {
  articles: Article[];
}

export function Welcome(props: Props) {
  const [burgerOpened, { close, toggle }] = useDisclosure();
  const isAboveXs = useMediaQuery('(min-width: 480px)');
  const [selectedModalArticle, setSelectedModalArticle] = useState<Article | undefined>();
  const [selectedCategory, setSelectedCategory] = useState('Aviation');

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
        setSelectedCategory={setSelectedCategory}
        close={close}
      />
      <div className="card-container">
        <Grid>
          {props.articles &&
            props.articles.length > 0 &&
            props.articles.map((item: Article, index: number) => (
              <Grid.Col span={{ xs: 12, sm: 6, lg: 3 }} key={index} data-testid="article-card">
                <NewsCard article={item} setSelectedArticle={() => setSelectedModalArticle(item)} />
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
