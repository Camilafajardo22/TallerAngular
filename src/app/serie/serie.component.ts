import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }


  getSerieList(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series);
  }

  calculateSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => totalSeries = totalSeries + 1);
    series.forEach((serie) => totalSeasons =totalSeasons + serie.seasons);

    let averageSeasons: number = totalSeasons/totalSeries;

    return averageSeasons;
  }


  ngOnInit() {
    this.getSerieList();
  }

}
