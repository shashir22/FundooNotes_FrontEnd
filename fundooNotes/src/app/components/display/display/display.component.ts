import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../../update/update/update.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()recievedNoteList:any;

  @Output() displayEvent = new EventEmitter<string>();
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   }

   openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent , {
      width: '450px',
      height:'250px',
      data:note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.displayEvent.emit("Hello")  
    });  

   
  }
  displayMessage(event:any){
    this.displayEvent.emit("Hello")
  }
 
}

