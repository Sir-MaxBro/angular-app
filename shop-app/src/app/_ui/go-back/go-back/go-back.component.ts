import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoBackComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  public onGoBack(): void {
    this.location.back();
  }
}
