import app from '../config/Firebase';
import { AsyncStorage } from "react-native"

module.exports ={
    createNote : function (note){
        var database = app.database();
        var noteRef = database.ref('/notes');
        if(note.noteTitle != "" && note.noteDescription && note.noteTitle != null && note.noteDescription != null){
           var data= noteRef.push({
                Notetitle : note.noteTitle,
                NoteDesc : note.noteDescription,
                isPin : false,
                isTrash : false,
                isArchive : false,
                Reminder : '',
                ImageUrl : '',
                Labels : []
            })            
        }
        
    },
    
    getNotes : function(callback){
        var database = app.database();
        var noteRef = database.ref('notes');
        var userKey = AsyncStorage.getItem("userKey");
        var notes;
        // noteRef.orderByChild('UserId').equalTo(userKey).on('value', function (snapshot) {
            noteRef.on('value', function(snapshot){
            var notesResponse = snapshot.val();
            notes = notesResponse;
            console.log("Notes: ", notes);
            
            return callback(notes);
        });
    },
    updateNote : function(title,description,key){
        if (title !== null && description !== null && title !== "" && description !== "") {
            var database = app.database();
            var noteRef = database.ref('notes');
            var note = {
                Notetitle: title,
                NoteDesc: description
            }
            noteRef.child(key).update(note);
        }
    
    }
}