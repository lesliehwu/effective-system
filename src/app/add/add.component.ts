import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import {Router} from '@angular/router';
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    product=new Product();
    products=[];
    submitted=false;
    constructor(private _router:Router, private _service:ProductsService){ }
    onSubmit(formData){
        if(formData.valid){
            this.products.push(this.product);
            this.submitted=true;
            this._service.createProduct(this.product);
            this._router.navigate(['/products']);
        }
        this.product=new Product();
    }
    ngOnInit() { }
}
