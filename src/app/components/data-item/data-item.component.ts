import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GridItem } from 'src/app/model/GridItem';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {

  @Input() item: GridItem;
  @Output() onContextMenu= new EventEmitter();
  private rowId: number = -1;

  public indexes = [ "grid", "slider" ];

  public swipeConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false
  };
  constructor() { }


  ngOnInit() {
  }

  getRowId(item) {
    return ++this.rowId;
  }

  buildContextMenu(item) {
    if (item === 'Assign Owner') {
      return '../../assets/icons/assign-owner.png';
    } else if (item === 'Assign To Me') {
      return '../../assets/icons/assigned-to-me.png';
    } else if (item === 'Ownership') {
      return '../../assets/icons/ownership.png';
    } else if (item === 'Others') {
      return '../../assets/icons/ellipse.png';
    }
  }

  getMenuItemName(item) {
    return item;
  }

  onIndexChange(event: any) {
  }

  onMenuItem(event: MouseEvent) {
    console.log('onMenuItem, event=', event);
    if (event.srcElement['id'] === 'Others') {
      this.onContextMenu.emit({
        x: event.x, 
        y: event.y, 
        id: event.srcElement['id'],
        items: ['Notify',
          'Snooze',
          'Resolve',
          'Reply',
          'Reply all',
          'Reassign',
          'Re-age',
          'Assign owner',
          'Assign to me',
          'Ownership'
        ]
      });
    }
    event.stopPropagation();
  }

  onItemClick(event: any) {
    console.log('onItemClick, id=', event.path[2].id);
  }

}
