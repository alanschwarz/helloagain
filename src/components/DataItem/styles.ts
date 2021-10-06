import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    dataPoint: {
        marginHorizontal: 20,
        flexDirection: 'column',
        borderRadius: 9,
        marginBottom: 10,
        padding: 15,
        elevation: 7,
        backgroundColor: 'white',
    },
    title: { fontSize: 17, marginBottom: 10 },
    points: {
        textAlign: 'right',
        fontSize: 25,
        fontWeight: 'bold',
    },
    picturesWrapper: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
    },
    singlePictureHolder: { height: 90, width: 90 },
    cta: {
        marginVertical: 10,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ctaText: {
        color: 'white',
        fontSize: 18,
    }
});
