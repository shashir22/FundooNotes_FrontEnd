import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isShow=false
  title:any
  description:any
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  show(){
    this.isShow=true
  }
  close(){
    this.isShow=false
    console.log(this.title, this.description)
    let data = {
      "title": this.title,
      "description": this.description,
      "bgColor": "Red",
      "isArchive": false,
      "isReminder": false,
      "isPin": false,
      "isTrash": false,
      "registerdDate": "2022-05-17T06:11:22.623Z"
    }
    this.note.addNote(data).subscribe((result: any) => {
      console.log("result" ,result);
      this.messageEvent.emit("Hello")
    })
  }
}
