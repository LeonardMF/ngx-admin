import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-bar-custom',
  template: `
    <ngx-charts-bar-horizontal
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-horizontal>
  `,
})
export class D3BarCustomComponent implements OnDestroy {

  results = [
    {name: 'LaunchRequest', value: 471},
    {name: 'AMAZON.StopIntent', value: 197},
    {name: 'AMAZON.NoIntent', value: 183},
    {name: 'SessionEndedRequest', value: 109},
    {name: 'abfahrzeitenIntent', value: 94},
    {name: 'verbindungenIntent', value: 78},
    {name: 'verbindungenIntent', value: 49},
    {name: 'AMAZON.YesIntent', value: 38},
    {name: 'StationLiftIntent', value: 33},
    {name: 'StationLiftIntent', value: 29},
  ];
  showLegend = false;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = false;
  xAxisLabel = 'Interaction Counts';
  yAxisLabel = 'Interaction';
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
