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
        paddingTop: 3,
        paddingLeft: 15
    },
    navigationButton: {
        flexDirection: 'row',
        marginLeft: 80,
        paddingTop: 3
    },
    view1: {
        width: '100%',
        height: '100%'
    },
    takeNoteCard: {
        width: '100%',
        padding: 0,
        marginLeft: 0,
        height: 60
    },
    takeNoteCardIcon: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: 10
    },
    sidebarBtn: {
        flexDirection: 'row',
        height: 40,
        marginLeft: 10,
        paddingBottom : 8
    },
    sidebarText: {
        fontSize: 20,
        paddingLeft: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: 150
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginTop: 15,
        marginLeft: 15
    },
    nameFont: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    labelText: {
        fontSize: 20,
        marginLeft: 10,
        paddingRight: 140
    }



})








