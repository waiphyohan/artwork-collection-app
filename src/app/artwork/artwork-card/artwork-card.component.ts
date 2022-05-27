import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/core/interfaces/iart-work';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent implements OnInit {

  @Input() artwork!: IData;
  @Input() iiifUrl!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
