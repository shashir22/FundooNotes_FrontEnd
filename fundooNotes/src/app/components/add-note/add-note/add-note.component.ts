import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  noteArray:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    console.log('hello am get all notes');
    this.addnote()
  }
  addnote(){
    this.note.getNote().subscribe((result:any)=>{
      console.log(result.data);
      this.noteArray=result.data
      this.noteArray=this.noteArray.filter((element:any)=>{
        return element.isTrash===false && element.isArchive===false
      })
     
   })
}

}
