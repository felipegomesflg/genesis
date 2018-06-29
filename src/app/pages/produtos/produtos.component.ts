import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import{ ComumService} from '../../services/comum.service'
import { DataService } from "./../../services/data.service";

import {Produtos} from '../../models/produtos'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  constructor(public comum:ComumService,private ref: ChangeDetectorRef,private data:DataService) { }
  
  public itemArray: Array<string>;
  public categoriaArray: Array<string>;
  
  ngOnInit() {
    this.loadData();
  }

  public editData:any;
  loadData(){

    this.data.getList('produtos').subscribe(val =>{      
        this.itemArray = val.data;
        //console.log(this.itemArray);
        this.resetData();
        this.loadCategoria();
        
        });

  }
  loadCategoria(){
    this.data.getList('categorias').subscribe(val =>{       
      this.categoriaArray = val.data;
      });
  }
  saveData(isProd){

    if(isProd){
      if(!this.editData._id){
        this.data.addEntity(this.editData, "produtos")
            .subscribe(val => {
              this.loadData();
            });

      }else{
        this.data.update(this.editData, "produtos/"+this.editData._id)
            .subscribe(val => {
              this.loadData();
            });
      }
      
    }else{
      if(!this.editData._id){
        this.data.addEntity(this.editData, "categorias")
            .subscribe(val => {
              this.loadData();
            });

      }else{
        this.data.update(this.editData, "categorias/"+this.editData._id)
            .subscribe(val => {
              this.loadData();
            });
      }
    }
    this.comum.modalReference.close();

  }

  resetData(){
    this.editData = new Produtos();
  }

  deleteData(id,isProd){
    console.log(id);
    if(isProd){
      this.data.delete("produtos/"+id)
          .subscribe(val => {
            this.loadData();
          });
      }else{
        this.data.delete("categorias/"+id)
          .subscribe(val => {
            this.loadData();
          });
      }

  }
  openModal(data=undefined,content,tam){
    if(data)
    this.editData = data;

    this.comum.openModal(data,content,tam)
  }

}
