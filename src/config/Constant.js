class Constant {
    // Notes type 
    static NOTES = "Notes";
    static REMINDERS = "Reminders";
    static ARCHIVE = "Archive";
    static TRASH = "Trash";
    static LABEL = "Label";
    static PIN = "Pin";
    // Header Color
    static HEADER_COLOR_DARK_BROWN = "#636363";
    static HEADER_COLOR_DARK_YELLOW = "#ffc107";
    static HEADER_COLOR_DARK_GRAY = "#5f7c8a";

    static filteredNoteAccordingStatus(notesArray, noteType) {        
        switch (noteType) {
            case this.NOTES:
                return notesArray.filter((note) => note.isTrash === false && note.isArchive === false);
            case this.REMINDERS:
                return notesArray.filter((note) => note.isTrash === false && note.Reminder !== "");
            case this.ARCHIVE:
                return notesArray.filter((note) => note.isArchive === true && note.isTrash === false);
            case this.TRASH:
                return notesArray.filter((note) => note.isTrash === true)
        }
    }
}
export default Constant;
