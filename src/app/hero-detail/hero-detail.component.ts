import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;   //@Input()过滤器可以让hero属性可供外部组件绑定
  constructor() { }

  ngOnInit() {
  }

}
