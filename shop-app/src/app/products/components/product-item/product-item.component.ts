import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../shared/models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: Product;

  @Output() public openDetails: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public onOpenDetails(): void {
    this.openDetails.emit(this.product.id);
  }
}
