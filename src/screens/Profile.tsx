import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { PostTab } from '../components/profile/PostTab';
import { ProfileTabs, STATUS } from '../components/profile/Tabs';
import { TopCard } from '../components/profile/TopCard';
import { StoryList } from '../components/stories/StoryList';
import { globalStyles } from '../globals/styles';

export default function () {
  const [active, setActive] = useState<typeof STATUS>('post');

  return (
    <View style={globalStyles.safeView}>
      <ScrollView>
        <TopCard />

        <StoryList showName />

        <ProfileTabs onPress={setActive} active={active} />

        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          {active === 'post' && <PostTab />}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
