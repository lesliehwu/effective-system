import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from './../product';
import {Router} from '@angular/router';
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    products;
    product;
    id;
    constructor(private _route:ActivatedRoute, private _router:Router, private _service:ProductsService){
        this._route.paramMap.subscribe((params)=>{
            this.products=this._service.retrieveProducts();
            this.product=this.products[params.get('id')];
            this.id=params.get('id');
        })
    }
    onSubmit(formData){
        this._router.navigate(['/products']);
    }
    remove(){
        this.products.splice(this.id,1);
    }
    ngOnInit(){
        this.products=this._service.retrieveProducts();
    }
}
