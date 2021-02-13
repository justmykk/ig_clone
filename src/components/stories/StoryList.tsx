import React from 'react';
import { FlatList } from 'react-native';
import { AddStory } from './AddStory';
import { StoryItem } from './StoryItem';

const arr = new Array(9);

interface Props {
  showName?: boolean;
}

export const StoryList = (props: Props) => {
  return (
    <FlatList
      data={arr}
      renderItem={({ item, index }) => <StoryItem showText={props.showName} index={index} />}
      ListHeaderComponent={AddStory}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
