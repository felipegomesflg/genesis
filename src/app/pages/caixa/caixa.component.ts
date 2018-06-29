import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss']
})
export class CaixaComponent implements OnInit {

  constructor(public comum:ComumService) { }

  ngOnInit() {
  }

}
