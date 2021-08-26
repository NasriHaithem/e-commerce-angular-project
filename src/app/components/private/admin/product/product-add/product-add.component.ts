import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      category: new FormControl('',[
        Validators.required
      ]),
      image: new FormControl('',[
        Validators.required
      ])
    }

    this.addProductForm = this.fb.group(formControls)
  }

  get name() { return this.addProductForm.get('name') }
  get description() { return this.addProductForm.get('description') }
  get price() { return this.addProductForm.get('price') }
  get category() { return this.addProductForm.get('category') }
  get image() { return this.addProductForm.get('image') }

  ngOnInit(): void {
  }

  addProduct(){
    let data = this.addProductForm.value;
    console.log(data);   
  }

}
