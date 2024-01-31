import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() value: number;

  filledStars: number;
  percentage: number;
  starsArray: any[];

  constructor() { }

  ngOnChanges() {
    this.calculateStars();
  }

  calculateStars() {
    this.filledStars = Math.round((this.value / 100) * 5);
    this.percentage = Math.round((this.value / 100) * 100);
    this.starsArray = new Array(5);
  }
}
