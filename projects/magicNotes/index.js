//  ,   f   j   J
console.log('Welcome to magic notes. This is magicnotes.js');
showNotes();
//If user adds a note - add it to localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (addTxt.value!=''||addTitle.value!=''){
        if(notes==null){
            var notesOb = [];
        }
        else{
            notesOb = JSON.parse(notes);
        }
        let myOb = {
            title:addTitle.value,
            text:addTxt.value
        };
        notesOb.push(myOb);
        localStorage.setItem('notes',JSON.stringify(notesOb));
        addTxt.value='';
        addTitle.value='';
        // console.log(notesOb);
        showNotes();
    }
});
// function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem('notes');
    var notesOb=((notes==null)?[]:JSON.parse(notes));
    let html = '';
    notesOb.forEach(function(element,index){
        html += `
        <div class="noteCard m-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `;
    });
    let notesEl = document.getElementById('notes');
    if(notesOb.length!=0){
        notesEl.innerHTML = html;
    }
    else{
        notesEl.innerHTML = `Nothing to show! Use 'Add Note' button above to add notes.`;
    }
}
// function to delete a note
function deleteNote(index){
    // console.log('Deleting',index);
    let notes = localStorage.getItem('notes');
    var notesOb=((notes==null)?[]:JSON.parse(notes));
    notesOb.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesOb));
    showNotes();
}

let search = document.getElementById('search');
search.addEventListener('input',function(){
    let searchVal = search.value;
    // console.log('input event fired',searchVal);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardContent = element.getElementsByTagName('p')[0].innerHTML;
        if(cardContent.includes(searchVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });
});
/**Further Features
 * Add Title
 * Mark a note as important/bookmark
 * Separate notes by user
 * Sync and host to web server
 */