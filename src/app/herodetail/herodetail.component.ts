import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  @Input() hero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
