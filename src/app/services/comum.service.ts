import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage'
import {Subject} from 'rxjs/Subject';

import { NgbModal,NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class ComumService {

  constructor(
    private router: Router, 
    private modalService: NgbModal,
    private localStorage:LocalStorageService
  ) { }

  public isLogged:any = false;
  public modalReference:any;
  public editData:any = {};
  logged = new Subject();
  public acao = 'Cadastro de';

  menuToggle = new EventEmitter<boolean>();

  login(){
    this.loggedGet = true;
    this.router.navigate([ '/home' ]);
  }

  logout(){
    this.router.navigate(['/login']);
    this.loggedGet = false;
  }

  openModal(data,content,size:any= 'md'){
    if(data)
      this.acao = 'Edição de';
    else
      this.acao = 'Cadastro de';

    this.modalReference = this.modalService.open(
      content, { 
        backdrop: "static", 
        size: size, 
        windowClass: "scrollable" }
    );
  }

  
  set loggedGet(value) {
    this.localStorage.set('isLogged', value);
    this.isLogged = value?true:false;
    this.logged.next(value);
}


 get loggedGet() {
   return this.localStorage.get('isLogged');
 }

 toggleMenu() {
  this.menuToggle.emit();
}
}
