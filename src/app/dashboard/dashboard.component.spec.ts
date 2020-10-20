import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';

import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const subjectMock = new ReplaySubject<any>(null);

  const mockData =  [
    {
        "id": "A1",
        "name": "Angular",
        "category": "Framework",
        "latestVersion": "9.0.5",
        "documentation": "https://angular.io/docs",
        "type": "Front End",
        "description": "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
    }
]


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  // it('should get ReplaySubject value is true', () => {
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   subjectMock
  //     .pipe(filter((res) => !!res))
  //     .subscribe((res) => expect(res).toEqual(mockData));
  //   subjectMock.next(mockData);
  // });


});
