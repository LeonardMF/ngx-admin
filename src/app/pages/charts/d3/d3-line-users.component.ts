import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-line-users',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineUsersComponent implements OnDestroy {
  multi = [
    {
      name: 'Total Users',
      series: [
        {name: 'Sat, Jul 4th 2020', value: 15},
        {name: 'Sun, Jul 5th 2020', value: 18},
        {name: 'Mon, Jul 6th 2020', value: 11},
        {name: 'Tue, Jul 7th 2020', value: 34},
        {name: 'Wed, Jul 8th 2020', value: 11},
        {name: 'Thu, Jul 9th 2020', value: 12},
        {name: 'Fri, Jul 10th 2020', value: 20},
        {name: 'Sat, Jul 11th 2020', value: 17},
        {name: 'Sun, Jul 12th 2020', value: 12},
        {name: 'Mon, Jul 13th 2020', value: 12},
        {name: 'Tue, Jul 14th 2020', value: 9},
        {name: 'Wed, Jul 15th 2020', value: 10},
        {name: 'Thu, Jul 16th 2020', value: 16},
        {name: 'Fri, Jul 17th 2020', value: 13},
        {name: 'Sat, Jul 18th 2020', value: 24},
        {name: 'Sun, Jul 19th 2020', value: 27},
        {name: 'Mon, Jul 20th 2020', value: 19},
        {name: 'Tue, Jul 21st 2020', value: 13},
        {name: 'Wed, Jul 22nd 2020', value: 2},
        {name: 'Thu, Jul 23rd 2020', value: 12},
        {name: 'Fri, Jul 24th 2020', value: 18},
        {name: 'Sat, Jul 25th 2020', value: 19},
        {name: 'Sun, Jul 26th 2020', value: 17},
        {name: 'Mon, Jul 27th 2020', value: 16},
        {name: 'Tue, Jul 28th 2020', value: 18},
        {name: 'Wed, Jul 29th 2020', value: 10},
        {name: 'Thu, Jul 30th 2020', value: 12},
        {name: 'Fri, Jul 31st 2020', value: 15},
        {name: 'Sat, Aug 1st 2020', value: 15},
        {name: 'Sun, Aug 2nd 2020', value: 14},
      ],
    },
    {
      name: 'Returning Users',
      series: [
        {name: 'Sat, Jul 4th 2020', value: 13},
        {name: 'Sun, Jul 5th 2020', value: 12},
        {name: 'Mon, Jul 6th 2020', value: 6},
        {name: 'Tue, Jul 7th 2020', value: 8},
        {name: 'Wed, Jul 8th 2020', value: 9},
        {name: 'Thu, Jul 9th 2020', value: 9},
        {name: 'Fri, Jul 10th 2020', value: 14},
        {name: 'Sat, Jul 11th 2020', value: 14},
        {name: 'Sun, Jul 12th 2020', value: 10},
        {name: 'Mon, Jul 13th 2020', value: 12},
        {name: 'Tue, Jul 14th 2020', value: 7},
        {name: 'Wed, Jul 15th 2020', value: 7},
        {name: 'Thu, Jul 16th 2020', value: 12},
        {name: 'Fri, Jul 17th 2020', value: 11},
        {name: 'Sat, Jul 18th 2020', value: 14},
        {name: 'Sun, Jul 19th 2020', value: 13},
        {name: 'Mon, Jul 20th 2020', value: 14},
        {name: 'Tue, Jul 21st 2020', value: 11},
        {name: 'Wed, Jul 22nd 2020', value: 0},
        {name: 'Thu, Jul 23rd 2020', value: 6},
        {name: 'Fri, Jul 24th 2020', value: 14},
        {name: 'Sat, Jul 25th 2020', value: 13},
        {name: 'Sun, Jul 26th 2020', value: 12},
        {name: 'Mon, Jul 27th 2020', value: 16},
        {name: 'Tue, Jul 28th 2020', value: 10},
        {name: 'Wed, Jul 29th 2020', value: 5},
        {name: 'Thu, Jul 30th 2020', value: 8},
        {name: 'Fri, Jul 31st 2020', value: 9},
        {name: 'Sat, Aug 1st 2020', value: 12},
        {name: 'Sun, Aug 2nd 2020', value: 11},
      ],
    },
    {
      name: 'New Users',
      series: [
        {name: 'Sat, Jul 4th 2020', value: 2},
        {name: 'Sun, Jul 5th 2020', value: 6},
        {name: 'Mon, Jul 6th 2020', value: 5},
        {name: 'Tue, Jul 7th 2020', value: 26},
        {name: 'Wed, Jul 8th 2020', value: 2},
        {name: 'Thu, Jul 9th 2020', value: 3},
        {name: 'Fri, Jul 10th 2020', value: 6},
        {name: 'Sat, Jul 11th 2020', value: 3},
        {name: 'Sun, Jul 12th 2020', value: 2},
        {name: 'Mon, Jul 13th 2020', value: 0},
        {name: 'Tue, Jul 14th 2020', value: 2},
        {name: 'Wed, Jul 15th 2020', value: 3},
        {name: 'Thu, Jul 16th 2020', value: 4},
        {name: 'Fri, Jul 17th 2020', value: 2},
        {name: 'Sat, Jul 18th 2020', value: 10},
        {name: 'Sun, Jul 19th 2020', value: 14},
        {name: 'Mon, Jul 20th 2020', value: 5},
        {name: 'Tue, Jul 21st 2020', value: 2},
        {name: 'Wed, Jul 22nd 2020', value: 2},
        {name: 'Thu, Jul 23rd 2020', value: 6},
        {name: 'Fri, Jul 24th 2020', value: 4},
        {name: 'Sat, Jul 25th 2020', value: 6},
        {name: 'Sun, Jul 26th 2020', value: 5},
        {name: 'Mon, Jul 27th 2020', value: 0},
        {name: 'Tue, Jul 28th 2020', value: 8},
        {name: 'Wed, Jul 29th 2020', value: 5},
        {name: 'Thu, Jul 30th 2020', value: 4},
        {name: 'Fri, Jul 31st 2020', value: 6},
        {name: 'Sat, Aug 1st 2020', value: 3},
        {name: 'Sun, Aug 2nd 2020', value: 3},
      ],
    },
  ];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Users';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
