import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  homePage: boolean = false;

  records: Array<any>;

  technology: string;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.technology = this.route.snapshot.url[0].path;
    });

    this.dataService.subject.subscribe((records: any) => {
      this.records = records.data
      this.getAllRecords()
    });

  };

  toggle(record) {
    record.show = !record.show;
  }


  getAllRecords() {

    switch (this.technology) {
      case 'frontend':
        this.records = this.records.filter(t => t.type === 'Front End');
        break;

      case 'backend':
        this.records = this.records.filter(t => t.type === 'Back End');
        break;

      case 'testing':
        this.records = this.records.filter(t => t.type === 'Testing');
        break;

      case 'home':
        this.records = [];
        this.homePage = true
        break;

      default:
        this.records = []
    }

  }

}