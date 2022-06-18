import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { GetAllNotesComponent } from '../../get-all-notes/get-all-notes/get-all-notes.component';
import { TrashComponent } from '../../trash/trash/trash.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../../archive/archive/archive.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  data:any;
  isArchive:any;
  isTrash:any;

  @Input() notedata: any;
  @Output() updationevent=new EventEmitter<string>();

  isTrashComponent=false;
  isDisplayComponent=false;
  isArchieveComponent= false;

  colorArray = [{ Colorcode: "cadetblue", name: "cadetblue" }, { Colorcode: "#f28b82", name: "Red" }, { Colorcode: "#fbbc04", name: "Orange" }, { Colorcode: "#fff475", name: "Yellow" }, { Colorcode: "#ccff90", name: "Green" }, { Colorcode: "teal", name: "Teal" },
  { Colorcode: "#cbf0f8", name: "Blue" }, { Colorcode: "aqua", name: "aqua" }, { Colorcode: "#d7aefb", name: "Purple" }, { Colorcode: "#fdcfe8", name: "Pink" }, { Colorcode: "#e6c9a8", name: "Brown" }, { Colorcode: "#e8eaed", name: "Gray" }];


  constructor(private note:NoteService,private _snackBar: MatSnackBar, public dialog: MatDialog,private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == GetAllNotesComponent ) {
      this.isDisplayComponent = true;
    }

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      // console.log(this.isTrashComponent);
    }
    if (comp == ArchiveComponent) {
      this.isArchieveComponent = true;
      // console.log(this.isArchiveComponent);
    }
  }
  archieve() {
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.updationevent.emit(response) 
      if(this.isArchieveComponent==false){
        this._snackBar.open('Note Archived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      else {
        this._snackBar.open('Note unarchived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      } 
  })
    
  }

  Unarchieve() {
    let data = {
      isArchived: false,
    }
    this.note.archieveNote(data).subscribe((res:any)=>{
      console.log("unarchive a note",res);
      this.updationevent.emit(res)
    })
}
trash() {
  // this.isTrash = !note.isTrash;
  this.note.trashNote(this.notedata.noteId, this.data).subscribe((response: any) => {
    console.log(response);
    this.updationevent.emit(response)
    this._snackBar.open('Note trashed successfully', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  }, error => this._snackBar.open('failed to trash', '', {
    duration: 2000,
    verticalPosition: 'bottom'
  })
  )
}
restore() {
  // this.isTrash = !note.isTrash;
  this.note.trashNote(this.notedata.noteId, this.data).subscribe((response: any) => {
    console.log(response);
    this.updationevent.emit(response)
    this._snackBar.open('Note restore successfully', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  }, error => this._snackBar.open('failed to trash', '', {
    duration: 2000,
    verticalPosition: 'bottom'
  })
  )
}
delete() {
  this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
    console.log("Note Deleted Successfully", response);
    this.updationevent.emit(response);

    this._snackBar.open('Note Deleted Successfully', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  })
}
changeColor(colorArray: any) {
  console.log(colorArray, this.notedata);
  this.note.changeColor(this.notedata.noteId, colorArray).subscribe((response: any) => {
    console.log(response);
    this.updationevent.emit(response)
    this._snackBar.open('Color changed successfully..', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
  }, error => this._snackBar.open('failed to change color', '', {
    duration: 2000,
    verticalPosition: 'bottom'
  })
  )
}
}