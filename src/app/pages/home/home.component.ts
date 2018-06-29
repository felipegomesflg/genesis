import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public comum:ComumService) { }

  ngOnInit() {
  }

}
