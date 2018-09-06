import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 10
    },
    username: {
        fontSize: 20,
        width: 350,
        paddingLeft: 8
    },
    links: {
        color: 'blue',
        fontSize: 15
    },
    flexRow: {
        flexDirection: 'row'
    },
    loginBtn: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 200,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20

    },
    registerLink: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    notesTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        paddingTop: 6,
        paddingLeft: 8
    },
    navigationButton: {
        flexDirection: 'row',
        marginLeft : 120,
        paddingTop : 3
    }
})








