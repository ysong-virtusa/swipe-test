import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe} from '@angular/common';
import { GridItem } from 'src/app/model/GridItem';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @ViewChild('contextmenu', {static: false}) contextMenuComponent: ContextMenuComponent;

  datePipe = new DatePipe('en-US');
  items: GridItem[] = [
    {
      id: 1,
      iconClass: 'fas fa-swimmer',
      name: "Alizah Ali",
      headline: "*GT IN ICG In ExpMgmt XMC Manual Group 1",
      subject: 'Wired Request - Feb Settlement 1',
      approved: false,
      menuitems: [ "Assign Owner", "Assign To Me", "Ownership", "Others" ],
      date: this.datePipe.transform(new Date(), 'medium'),
      annex: 'annex',
    },
    {
      id: 2,
      iconClass: 'fas fa-user-edit',
      name: "Lee Jonze",
      headline: "*GT IN ICG In ExpMgmt XMC Manual Group 2",
      subject: 'Wired Request - Feb Settlement 2',
      approved: false,
      menuitems: [ "Assign Owner", "Assign To Me", "Ownership", "Others" ],
      date: this.datePipe.transform(new Date(), 'medium'),
      annex: 'annex',
    },
    {
      id: 3,
      iconClass: 'fas fa-user-cog',
      name: "Alizah Ali",
      headline: "*ICG IN ExpMgmt XMC Automation GRP1",
      subject: 'Wired Request - Feb Settlement 3',
      approved: true,
      menuitems: [ "Assign Owner", "Assign To Me", "Ownership", "Others" ],
      date: this.datePipe.transform(new Date(), 'medium'),
      annex: 'annex',
    },
    {
      id: 4,
      iconClass: 'fas fa-headset',
      name: "Lee Jonze",
      headline: "*ICG IN ExpMgmt XMC Automation GRP2",
      subject: 'Wired Request - Feb Settlement 4',
      approved: false,
      menuitems: [ "Assign Owner", "Assign To Me", "Ownership", "Others" ],
      date: this.datePipe.transform(new Date(), 'medium'),
      annex: 'annex',
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onContextMenuOpen(event: any) {
    this.contextMenuComponent.open(event);
  }
}
