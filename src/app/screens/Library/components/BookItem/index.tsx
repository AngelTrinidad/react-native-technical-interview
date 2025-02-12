import React from 'react';
import { Image, TouchableOpacity, ViewStyle } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img/img_book_placeholder.png';
import ViewFlex from '@app/components/ViewFlex/ViewFlex';
import Text from '@app/components/Text/Text';
import Title from '@app/components/Title/Title';

import styles from './styles';

interface Props {
  book: Book;
  onPress?: (book: Book) => void;
  style?: ViewStyle;
}

const BookItem: React.FC<Props> = ({ book, onPress, style }) => {
  // Callback when item pressed
  const handlePress = React.useCallback((): void => {
    if (onPress) onPress(book);
  }, [onPress, book]);

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style]}>
      <Image
        source={book.imageUrl ? { uri: book.imageUrl } : placeholder}
        style={styles.image}
        resizeMode="center"
      />
      <ViewFlex>
        <Title numberOfLines={1}>{book.title}</Title>
        <Text numberOfLines={1}>{book.author}</Text>
      </ViewFlex>
    </TouchableOpacity>
  );
};

export default React.memo(BookItem);
