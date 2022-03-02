import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.page.html',
  styleUrls: ['./auto-complete.page.scss'],
})
export class AutoCompletePage implements OnInit {

  public segments = [
    {
      key:   'simple-service',
      label: 'Basic'
    },
    {
      key:   'ingredients',
      label: 'Ingredients'
    },
    {
      key:   'team-picker',
      label: 'Pick Teams'
    },
    {
      key:   'country-picker',
      label: 'Pick Countries'
    }
  ];

  public selectedSegment:string = this.segments[0].key;

  constructor(
      private route:ActivatedRoute,
      private router:Router
  ) {

  }

  ngOnInit():void {
    this.route.fragment.subscribe(
        (fragment) => {
          this.setSegment(fragment);
        }
    );
  }

  onClickSegment(event:CustomEvent):void {
    if (event.detail && typeof event.detail.value === 'string') {
      const segment = event.detail.value;

      this.setSegment(segment);
    }
  }

  setSegment(segment:string):void {
    if (typeof segment === 'string') {
      segment = segment.toLowerCase();

      const arrayHas = this.segments.some(
        (candidate) => {
          return candidate.key === segment;
        }
      );

      if (arrayHas) {
        this.selectedSegment = segment;

        this.router.navigate(
           [],
           {
             fragment: segment
           }
        ).then();
      }
    }
  }
}
