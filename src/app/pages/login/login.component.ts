import { Component, OnInit } from '@angular/core';
import{ ComumService} from '../../services/comum.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public comum:ComumService) { }
  loginObj :any = {usuario:"",senha:""}
  ngOnInit() {
  }

  login(){

    this.comum.data.addEntity(this.loginObj,'usuario/login').subscribe(val=>{
      if(val.id){
        this.comum.loggedGet = true;
        this.comum.router.navigate([ '/home' ]);
      }else
      this.comum.alertaErro('Login ou senha incorretos');
      
    });
    
  }

  

}
