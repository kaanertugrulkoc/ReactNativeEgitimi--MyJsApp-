import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',

    },
    box: {

        width: 100,
        height: 100,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    yaziTipi: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: 'black',
        backgroundColor: 'green',
        width: 250,

        borderRadius: 10,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',

    },
    yeniTip: {
        textAlign: 'center',
        backgroundColor: '#B8B8F5',
        width: 300,

        borderRadius: 10,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


    },
    yeniTip2: {
        textTransform: 'uppercase',
        textAlign: 'center',

    },
});