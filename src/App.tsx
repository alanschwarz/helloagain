import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import styles from "./App.styles";
import DataItem from "./components/DataItem";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import fetchData from "./services/bountieService";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const collectedRewards = useSelector(
    (state: RootState) => state.rewardsReducer.collectedRewards
  );

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      if (data) {
        setData(data);
      }
      setLoading(false);
    })();
  }, []);

  const renderItem = ({ item }: any) => (
    <DataItem
      title={item.name}
      points={item.needed_points}
      pictures={item.pictures}
      id={item.id}
    />
  );

  if (loading) {
    return <SafeAreaView style={styles.container}><ActivityIndicator /></SafeAreaView>;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ height: 150 }} />}
        />
      </SafeAreaView>
      <View style={styles.floatingBubble}>
        <Text style={styles.floatingBubbleText}>{collectedRewards.length}</Text>
        <Text style={styles.floatingBubbleLabel}>collected</Text>
      </View>
    </>
  );
};

export default App;
