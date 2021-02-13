import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { PostTab } from '../components/profile/PostTab';
import { ProfileTabs, STATUS } from '../components/profile/Tabs';
import { StoryList } from '../components/stories/StoryList';

export default function () {
  const [active, setActive] = useState<typeof STATUS>('post');

  return (
    <SafeAreaView>
      <ScrollView>
        <StoryList showName />

        <ProfileTabs onPress={setActive} active={active} />

        <View style={{paddingHorizontal: 20, marginTop: 30}}>
        {active === 'post' && <PostTab />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
