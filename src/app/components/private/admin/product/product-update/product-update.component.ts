import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  updateProductForm: FormGroup

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

    this.updateProductForm = this.fb.group(formControls)
  }

  get name() { return this.updateProductForm.get('name') }
  get description() { return this.updateProductForm.get('description') }
  get price() { return this.updateProductForm.get('price') }
  get category() { return this.updateProductForm.get('category') }
  get image() { return this.updateProductForm.get('image') }

  ngOnInit(): void {
  }

  updateProduct(){
    let data = this.updateProductForm.value;
    console.log(data);   
  }

}
