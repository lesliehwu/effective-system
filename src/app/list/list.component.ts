import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from './../product';
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    products;
    constructor(private _router:Router, private _service:ProductsService){ }
    remove(x){
        this.products.splice(x,1);
    }
    onSubmit(formData){
        this._router.navigate(['/list']);
    }
    ngOnInit(){this.products=this._service.retrieveProducts();}
}
