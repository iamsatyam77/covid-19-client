import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/models/states.model';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  states!: IState[];

  constructor(private metadataService: MetadataService) {}

  ngOnInit(): void {
    // this.metadataService.getStates$().subscribe();

    // this.metadataService.getDistrictsByStateId$('34').subscribe();
  }
}
