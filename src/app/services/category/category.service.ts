import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = "http://localhost:8081/categories/";

  constructor(private http: HttpClient) { }

  addCategory(newCategory : Category) {
    return this.http.post<Category>(this.categoryUrl + 'add', newCategory);
  }
}
