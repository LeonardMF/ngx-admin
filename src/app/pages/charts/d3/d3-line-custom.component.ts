import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-line-custom',
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
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-line-chart>
  `,
})
export class D3LineCustomComponent implements OnDestroy {
  multi = [
    {
      name: 'Engaged Users',
      series: [
        {name: 'Sat, Jul 4th 2020', value: 8333},
        {name: 'Sun, Jul 5th 2020', value: 8339},
        {name: 'Mon, Jul 6th 2020', value: 8344},
        {name: 'Tue, Jul 7th 2020', value: 8370},
        {name: 'Wed, Jul 8th 2020', value: 8372},
        {name: 'Thu, Jul 9th 2020', value: 8375},
        {name: 'Fri, Jul 10th 2020', value: 8381},
        {name: 'Sat, Jul 11th 2020', value: 8384},
        {name: 'Sun, Jul 12th 2020', value: 8386},
        {name: 'Mon, Jul 13th 2020', value: 8386},
        {name: 'Tue, Jul 14th 2020', value: 8388},
        {name: 'Wed, Jul 15th 2020', value: 8391},
        {name: 'Thu, Jul 16th 2020', value: 8395},
        {name: 'Fri, Jul 17th 2020', value: 8397},
        {name: 'Sat, Jul 18th 2020', value: 8407},
        {name: 'Sun, Jul 19th 2020', value: 8421},
        {name: 'Mon, Jul 20th 2020', value: 8426},
        {name: 'Tue, Jul 21st 2020', value: 8428},
        {name: 'Wed, Jul 22nd 2020', value: 8430},
        {name: 'Thu, Jul 23rd 2020', value: 8436},
        {name: 'Fri, Jul 24th 2020', value: 8440},
        {name: 'Sat, Jul 25th 2020', value: 8446},
        {name: 'Sun, Jul 26th 2020', value: 8451},
        {name: 'Mon, Jul 27th 2020', value: 8451},
        {name: 'Tue, Jul 28th 2020', value: 8459},
        {name: 'Wed, Jul 29th 2020', value: 8464},
        {name: 'Thu, Jul 30th 2020', value: 8468},
        {name: 'Fri, Jul 31st 2020', value: 8474},
        {name: 'Sat, Aug 1st 2020', value: 8477},
        {name: 'Sun, Aug 2nd 2020', value: 8480},
      ],
    },
  ];
  showLegend = false;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Engaged Users';
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
