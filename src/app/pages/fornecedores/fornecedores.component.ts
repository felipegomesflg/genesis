import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  constructor(public comum:ComumService) { }

  ngOnInit() {
  }

}
