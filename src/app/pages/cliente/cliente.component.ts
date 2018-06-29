import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'
import{ DataService} from '../../services/data.service'


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  users: Array<any>;
  constructor(public comum:ComumService,
    public data:DataService
  ) { 
    this.data.getUsers()
    .subscribe(res=> this.users = res);

  }

  ngOnInit() {
  }

}
