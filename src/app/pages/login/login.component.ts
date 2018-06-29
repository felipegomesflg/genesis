import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public comum:ComumService) { }

  ngOnInit() {
  }

  

}
