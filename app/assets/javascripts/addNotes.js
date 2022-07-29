document.addEventListener("DOMContentLoaded", function() {
    var ntxtIn = document.getElementById("noteText"),
      notesOut = document.getElementById("noteList"),
      saveBut = document.getElementById("saveBut");
  
    //fields object {noteTitle:element,noteSubTitle:element,noteText:element,out:element}



    function noteManager(fields) {
      fields = fields || {};
      var out = fields.out || undefined,
        notes = [];
  
      var sendOut = function(html) {
        var output = document.createElement("div");
        output.innerHTML = html;
        out.appendChild(output);
      };
  
      var loadNotes = function() {
        if (localStorage.getItem("notes")) {
          var load = JSON.parse(localStorage.getItem("notes"));
          notes = load;
          console.log("Loaded notes object:" + JSON.stringify(load));
        }
        resetHTML();
      };
  
      var saveNotes = function() {
        var save = JSON.stringify(notes);
        localStorage.setItem("notes", save);
        console.log("Saved shortcut object:" + notes);
      };
  
      this.clearSavedNotes = function() {
        localStorage.setItem("notes", "");
      };
  
      this.deleteNote = function(noteID) {
        for (var count = 0; count < notes.length; count += 1) {
          console.log(notes[count].id);
          if (notes[count].id === noteID) {
            if (count > -1) {
              notes = notes.splice(count, 1);
            }
          }
        }
      };
  
      var resetHTML = function() {
        out.innerHTML = "";
        for (var count = 0; count < notes.length; count += 1) {
          if (notes[count].html) {
            sendOut(notes[count].html);
          }
        }
      };
  
      var createNote = function() {
        //could be better
        var newNote = {},
          result = "";
        loadNotes();
        if (notes.length > 0) {
          newNote.id = notes.length;
        } else {
          newNote.id = 0;
        }

        newNote.noteText = fields.noteText.value;
        result += '<div class="note" data-noteid="' + newNote.id + '">';
        result += '<div class="noteBottom">';
        result += '<div class="noteName">' + "John James (you)" + "</div>";
        result += '<div id="time">' + "</div>";
        result += '<div class="noteText">' + newNote.noteText + "</div>";
        result += "</div></div>";
        sendOut(result);
        newNote.html = result;
        notes.push(newNote);
        console.log(notes);
        saveNotes();
      };
  
      this.setButton = function(butEl) {
        butEl.addEventListener("click", createNote);
      };
  
      var init = (function() {
        loadNotes();
      })();
    }
  
    var myNotes = new noteManager({
      noteText: ntxtIn,
      out: notesOut
    });
    myNotes.setButton(saveBut);
  });
  
  
  function Loader() {
        if (localStorage.getItem("notes")) {
          var load = JSON.parse(localStorage.getItem("notes"));
          notes = load;
          console.log("Loaded notes object:" + JSON.stringify(load));
        }
      };
  