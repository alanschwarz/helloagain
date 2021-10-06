import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { collectReward } from '../../actions/actions';
import {RootState} from '../../store';

interface DataItemProps {
    title: string;
    points: number;
    id: string;
    pictures: any[];
}

export default ({ title, points, pictures, id }: DataItemProps) => {
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();
    const collectedRewards = useSelector((state: RootState) => state.rewardsReducer.collectedRewards);

    const collect = (id: string)=> {
        if (collectedRewards.indexOf(id) < 0) {
            dispatch(collectReward(id));
        }
    }

    useEffect(() => {
        setDisabled(collectedRewards.indexOf(id) >= 0 || points > 0);
    }, [collectedRewards]);

    return <View style={styles.dataPoint}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.points}>Points: {points}</Text>
        {
            pictures.length > 0 ? (
                <ScrollView style={styles.picturesWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        pictures.map((_, index) => {
                            const uri = _.image;
                            return <View style={styles.singlePictureHolder} key={index} >
                                <Image style={{ flex: 1 }} resizeMode='contain' source={{ uri }} />
                            </View>
                        })
                    }
                </ScrollView>
            ) : null
        }
        <TouchableOpacity style={StyleSheet.flatten([ styles.cta, {backgroundColor: disabled ? 'rgba(100, 149, 237, 0.5)'  : 'cornflowerblue'}])} onPress={disabled ? () => null : () => collect(id)}>
            <Text style={styles.ctaText}>Collect rewards!</Text>
        </TouchableOpacity>
    </View>
}