import { Component } from '@angular/core';
import{ ComumService} from './services/comum.service'
import { LocalStorageService } from 'angular-2-local-storage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public comum:ComumService,
    private localStorage:LocalStorageService,
  ) { }

  title = 'app works!';
  isCollapsed = false;

  
  ngOnInit(){
    this.comum.logged.subscribe(val=>{

    })

    this.comum.menuToggle.subscribe(show => (this.isCollapsed = !this.isCollapsed));

    this.comum.isLogged = this.localStorage.get('isLogged');
  }
  
}
