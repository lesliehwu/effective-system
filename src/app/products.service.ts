import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
    products=[];
    constructor() {}
    retrieveProducts(){return this.products;}
    createProduct(product){this.products.push(product);}
}
