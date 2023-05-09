import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  //user defined event
  @Output() toggle=new EventEmitter()
  asideToggle(){
    this.toggle.emit()
    window.dispatchEvent(
      new Event('resize')
    )
  }
}
