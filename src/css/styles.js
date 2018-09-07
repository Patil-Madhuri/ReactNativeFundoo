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
    sidebarReminderBtn : {
        flexDirection : 'row',
        height  : 60,
        marginLeft : 10
    },
    sidebarReminderText : {
        fontSize : 20, 
        paddingTop : 18,
        paddingLeft : 20
    }



})








