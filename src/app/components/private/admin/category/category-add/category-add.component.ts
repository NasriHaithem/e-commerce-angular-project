import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addCategoryForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formControls = {
      categoryName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.addCategoryForm = this.fb.group(formControls);
   }

  ngOnInit(): void {
  }

  get categoryName(): any { return this.addCategoryForm.get('categoryName') }

  addCategory() {
    let data = this.addCategoryForm.value;
    console.log(data);
    
  }
}
