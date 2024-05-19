'use client';

import { Text, Card, Image, Group, Badge, Button } from '@mantine/core';
import { IconPlaneDeparture } from '@tabler/icons-react';
import { Article } from '@/types/Article';
import '../../styles/styles.css';
import { getArticleImage } from '@/utils/getArticleImage';

interface Props {
  article: Article;
  setSelectedArticle: (articleItem: Article) => void;
}

export function NewsCard(props: Props) {
  const articleAlt = props.article?.multimedia[0]?.caption;
  const articleImage = getArticleImage(props.article?.multimedia);
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="article-card"
      h="100%"
      bg="whitesmoke"
    >
      <Card.Section>
        {articleImage ? (
          <Image
            src={`http://www.nytimes.com/${articleImage}`}
            height={160}
            alt={articleAlt ?? 'airplane icon'}
            data-testid="article-image"
          />
        ) : (
          <div className="flex-center icon-container" data-testid="article-placeholder-icon">
            <IconPlaneDeparture size={100} color="cornflowerblue" />
          </div>
        )}
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.article?.headline?.main}</Text>
        <div className="card-badge-container">
          <Badge color="#154a3a">{props.article?.section_name ?? 'GENERAL'}</Badge>
          {props.article?.subsection_name && (
            <Badge color="darkblue" ml={8} data-testid="subsection_badge">
              {props.article?.subsection_name}
            </Badge>
          )}
        </div>
      </Group>

      <Text size="sm" c="dimmed">
        {props.article?.abstract}
      </Text>
      <Button
        type="button"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => props.setSelectedArticle(props.article)}
      >
        Read More
      </Button>
    </Card>
  );
}
