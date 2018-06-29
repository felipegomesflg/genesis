import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../services/comum.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public comum:ComumService) { }

  ngOnInit() {
  }

}
