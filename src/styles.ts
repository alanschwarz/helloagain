import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (StatusBar.currentHeight || 0) + 20,
    },
    floatingBubble: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#edbb64',
        elevation: 10,
    },
    floatingBubbleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    floatingBubbleLabel: {
        color: 'white',
        fontSize: 10,
    }
});
