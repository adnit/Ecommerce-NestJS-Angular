import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryMethodService } from '../../../../../core/services/delivery-method/delivery-method.service';
import { DeliveryMethod } from '../../../../../core/interfaces/delivery-method.interface';

@Component({
  selector: 'app-create-form-delivery-method',
  templateUrl: './create-form-delivery-method.component.html',
  styleUrls: ['./create-form-delivery-method.component.scss']
})
export class CreateFormDeliveryMethodComponent implements OnInit {
  form: FormGroup;

  constructor(private deliveryService: DeliveryMethodService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      deliveryMethodName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      deliveryTime: ['', Validators.required],
      deliveryMethod: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    const delivery = this.form.getRawValue();
    this.createDelivery(delivery);
    this.form.reset();
  }

  createDelivery(delivery: DeliveryMethod) {
    this.deliveryService.createDelivery(delivery).subscribe(delivery => {});
  }
}
