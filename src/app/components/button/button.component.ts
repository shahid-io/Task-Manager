import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnName: string;
  @Input() color: string;
  @Input() btnTextColor: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.btnName = "";
    this.color = "primary"
    this.btnTextColor = "white"
  }
  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }
}
