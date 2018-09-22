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
    noteStatus : {
         fontWeight: 'bold', 
         fontSize: 20,
         marginLeft : 15
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
        marginLeft: 45,
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
    labelCard : {
        width: '100%',
        padding: 0,
        marginLeft: 0,
        height: 70,
        marginTop : -8
    },
    labelCardView :{
        flexDirection : 'row',
        marginTop : 7
    },
    displayLabelName : {
        fontSize:20,
        width:'70%',
        paddingLeft : 10,
        paddingRight :10
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
    },
    addNoteBottomStyle : {
        shadowOffset: {
            height: -2,
            width: 0
        },
        backgroundColor: 'white',
        shadowOpacity: 1,
        elevation: 4,
        shadowColor: '#000000',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
    },
    parentStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        shadowOffset: {
            height: -1,
            width: 0
        },
        backgroundColor: '#FBFCFC',
        shadowOpacity: 0.8,
        shadowColor: '#000000',
        elevation: 4,

    },
    viewMiddle: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#FBFCFC',

    },
    viewFirst: {
        backgroundColor: '#FBFCFC',
        height: 50,
        justifyContent: 'center'
    },
    viewLast: {
        backgroundColor: '#FBFCFC',
        height: 50,
        justifyContent: 'center'
    },
    textStyle: {
        height: 50,
        color: 'grey',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#FBFCFC'

    },
    buttonsGroupStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    slideMenuStyle: {
        shadowOffset: {
            height: 0,
            width: 0
        },
        backgroundColor: 'white',
        shadowOpacity: 1,
        elevation: 4,
        shadowColor: '#000000',
        width: '100%',
    },
    slidemenustyle: {
        backgroundColor: 'white',        
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft:8
        
    },
    slideMenuCellTextStyle: {
        textAlign: 'center',
        textAlignVertical:'center',
        paddingLeft: 8,
        fontSize: 20,
    },
    reminderContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:8,
        paddingRight:4
      },
      reminderContainerHideStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 0,
        width:0,
        opacity:0,
        paddingLeft:8,
      },
      reminderSubContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#e8e8e8",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ffffff00'
      },
      reminderTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        paddingLeft: 4,
        textAlign: 'left',
      },
      takeLabelInput : {
        fontSize: 15,
        width: 350,
        paddingLeft: 8
      }
})








