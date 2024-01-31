import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReleasesInformation } from 'src/app/models/releases-information';
import { TypeItem } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrls: ['./modal-information.component.css']
})
export class ModalInformationComponent {
  dataModelAlbum: ReleasesInformation;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ReleasesInformation
  ) {
  }
  ngOnInit() {
   this.dataModelAlbum = this.data

  }

}
