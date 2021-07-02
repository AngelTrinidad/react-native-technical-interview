import React from 'react';
import { Text, Title, ViewContainer, ViewFlex } from '@app/components';
import placeholder from '@assets/img/img_book_placeholder.png';
import { Image } from 'react-native';

import Card from './components/Card/Card';
import styles from './styles';

type Props = {
  title: string;
  author: string;
  genre: string;
  imageUrl: string | null;
};

const BookDetailUI: React.FC<Props> = ({ title, author, genre, imageUrl }) => {
  return (
    <ViewContainer>
      <ViewFlex style={styles.container}>
        <Card>
          <ViewFlex style={styles.container}>
            <Image source={imageUrl ? { uri: imageUrl } : placeholder} style={styles.image} />
          </ViewFlex>

          <Title style={styles.title}>{title}</Title>
          <Text style={styles.author}>by {author}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </Card>
      </ViewFlex>
    </ViewContainer>
  );
};

export default React.memo(BookDetailUI);
