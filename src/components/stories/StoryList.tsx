import React from 'react';
import { FlatList } from 'react-native';
import { AddStory } from './AddStory';
import { StoryItem } from './StoryItem';

const arr = new Array(9);

export const StoryList = () => {
  return (
    <FlatList
      data={arr}
      renderItem={({ item, index }) => <StoryItem index={index} />}
      ListHeaderComponent={AddStory}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
