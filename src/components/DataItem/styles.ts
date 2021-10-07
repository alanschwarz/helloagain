import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    dataPoint: {
        marginHorizontal: 20,
        flexDirection: 'column',
        borderRadius: 25,
        marginBottom: 18,
        padding: 15,
        elevation: 7,
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 10,
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
