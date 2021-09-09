import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8082/products/";

  constructor(private http:HttpClient) { }

  addProduct(product:any, file: File){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    const formaData = new FormData();
    formaData.append('image', file);
    formaData.append('product', JSON.stringify(product));

    return this.http.post<any>(this.productUrl + 'add',product);

  }
  findAllProducts(){
    return this.http.get<any>(this.productUrl + 'all');
  }
  findProductById(id:any){
    return this.http.get<any>(this.productUrl + id);
  }
  updateProduct(product:any){
    return this.http.put<any>(this.productUrl + 'update',product)
  }
  deleteProduct(id: any){
    return this.http.delete<any>(this.productUrl + `delete/${id}`)
  }
}