import {ElementRef,AfterViewInit, Component, ViewChild} from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-to');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 3500,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(parseInt(this.countNum)));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
  }
}
