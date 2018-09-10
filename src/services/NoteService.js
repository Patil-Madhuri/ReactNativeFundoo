import app from '../config/Firebase';

module.exports ={
    createNote : function (note){
        var database = app.database();
        var userRef = database.ref('/notes');
        userRef.push({
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
}