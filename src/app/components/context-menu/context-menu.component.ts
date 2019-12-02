import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @HostBinding("style.top") y = "0px"
  @HostBinding("style.left") x = "0px"
  @HostBinding("style.visibility") visibility = "visible"
  @Input() @HostBinding("style.width") width = "275px"
  @Input() @HostBinding("style.width") height = "469px"

  items = [];

  constructor() { }

  ngOnInit() {
  }

  open(event) {
    this.x = `${event.x}px`
    this.y = `${event.y}px`
    this.items = event.items;
 
    this.visibility = "visible"

    console.log('open(), x, y, visibility:', this.x, this.y, this.visibility, this.items);
  }
 
  close() {
    this.visibility = "hidden"
  }
 
  @HostListener('document:click')
  public onDocumentClick() {
    if (this.visibility === "visible") {
      console.log('closing context menu');
      this.close()
    }
  }

  onContextMenuItemClick(event: any) {
    alert('\'' + event.srcElement.innerHTML + '\' triggered!')
  }
}
