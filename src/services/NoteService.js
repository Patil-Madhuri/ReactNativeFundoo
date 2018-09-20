import app from '../config/Firebase';
import localStorage from 'react-native-sync-localstorage';
var noteService = require('../services/NoteService.js')
module.exports = {
    createNote: function (note) {
        var database = app.database();
        var noteRef = database.ref('/notes');
        var userKey = localStorage.getItem('userKey');

        if (note.noteTitle != "" && note.noteDescription && note.noteTitle != null && note.noteDescription != null) {
            noteRef.push({
                UserId: userKey,
                Notetitle: note.noteTitle,
                NoteDesc: note.noteDescription,
                isPin: false,
                isTrash: false,
                isArchive: false,
                Reminder: '',
                ImageUrl: '',
                Labels: [],
                color: "#fafafa"
            })
        }

    },
    getNotes: function (callback) {
        var database = app.database();
        var noteRef = database.ref('notes');
        var userKey = localStorage.getItem('userKey');
        var notes;
        noteRef.orderByChild('UserId').equalTo(userKey).on('value', function (snapshot) {
            var notesResponse = snapshot.val();
            notes = notesResponse;
            return callback(notes);
        });        
           
    },
    isPinNote: function (key, note) {
        console.log(key);
        console.log(note);
        
        
        if (note.isPin === false) {
            note.isPin = true;
        }
        else {
            note.isPin = false;
        }
        noteService.updateNoteStatus(key, note);
    },
    isArchiveNote: function (key, note) {
        if (note.isArchive === false) {
            note.isArchive = true;
        }
        else {
            note.isArchive = false;
        }
        noteService.updateNoteStatus(key, note);
    },
    isTrashNote: function (key, note) {
        if (note.isTrash === false) {
            note.isTrash = true;
        }
        else {
            note.isTrash = false;
        }
        noteService.updateNoteStatus(key, note);
    },
    addReminder : function(key,note){
        

    },
    updateNote: function (title, description,color, key) {
        if (title !== null && description !== null && title !== "" && description !== "") {
            var database = app.database();
            var noteRef = database.ref('notes');
            var note = {
                Notetitle: title,
                NoteDesc: description,
                color : color
            }
            noteRef.child(key).update(note);
        }
    },
    createLabel : function(labelName){
        var userKey = localStorage.getItem('userKey');
        var database = app.database();
        var labelRef = database.ref('labels');
        if(labelName !== null){
            labelRef.push({
                UserId : userKey,
                labelName : labelName
            })
        }
        
    },
    getLabels: function (callback) {
        var userKey = localStorage.getItem('userKey');
        var database = app.database();
        var labelRef = database.ref('labels');
        var labels;
        labelRef.orderByChild('UserId').equalTo(userKey).on('value', function (snapshot) {
            var labelResponse = snapshot.val();
            labels = labelResponse;
            return callback(labels);
        });
    },
   
}

exports.updateNoteStatus = (key, note) => {
    var database = app.database();
    var noteRef = database.ref('notes');
    noteRef.child(key).update(note);
}