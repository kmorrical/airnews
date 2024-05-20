'use client';

import { Text, Image, Modal, Anchor } from '@mantine/core';
import { Article } from '@/types/Article';
import '../../styles/styles.css';
import { getArticleImage } from '@/utils/getArticleImage';

interface Props {
  close: () => void;
  article?: Article;
}

export function MoreInfoModal(props: Props) {
  const articleImage = getArticleImage(props.article?.multimedia);

  return (
    <>
      <Modal opened={!!props.article} onClose={props.close}>
        {!!articleImage && (
          <Image
            src={`http://www.nytimes.com/${articleImage}`}
            height={160}
            alt={props.article?.multimedia && props.article?.multimedia[0]?.caption}
            data-testid="modal-image"
            mb={16}
            className="modal-image"
          />
        )}
        <Text fw={600} size="md" mb={16}>
          {props.article?.headline?.main}
        </Text>
        {/* if there is no author, do not render this */}
        {props.article?.byline?.original && (
          <Text size="xs" data-testid="byline-text">
            by {props.article?.byline?.original}
          </Text>
        )}
        <Text size="sm" c="dimmed" fs="italic">
          {props.article?.abstract}
        </Text>
        <br />
        <Text size="sm">{props.article?.lead_paragraph}</Text>
        <br />
        <Text size="sm" c="darkblue" ta="center">
          Like what you&apos;re reading? See more if this article at
        </Text>
        {/* this links out to NYT source */}
        <Anchor
          href={props.article?.web_url}
          target="_blank"
          size="sm"
          fs="italic"
          className="flex-center"
          mb={16}
        >
          The New York Times
        </Anchor>
      </Modal>
    </>
  );
}
