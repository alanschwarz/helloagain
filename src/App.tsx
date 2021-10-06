import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, ActivityIndicator, View, Text } from "react-native";
import styles from "./styles";
// import data from './data';
import DataItem from './components/DataItem';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const API_ENDPOINT =
    "https://staging.helloagain.at/api/v1/clients/5189/bounties/";


const App = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const collectedRewards = useSelector((state: RootState) => state.rewardsReducer.collectedRewards);

    console.log(collectedRewards);

    const fetchData = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            console.log(data);
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }: any) => (
        <DataItem title={item.name} points={item.needed_points} pictures={item.pictures} id={item.id} />
    );

    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{height: 150}}/>}
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