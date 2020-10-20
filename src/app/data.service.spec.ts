import { TestBed, inject, tick } from '@angular/core/testing';

import { DataService } from './data.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    expect(service.getRecords).toBeTruthy();
  });

  it('be able to retrieve records from the API via GET', () => {
    service.getRecords().subscribe((data: any) => {
      expect(data.totalRecords).toBe(10);
      expect(data.data.length).toBe(10);
    });
    const request = httpMock.expectOne('/assets/data.json');
    expect(request.request.method).toBe('GET');
    httpMock.verify();
    });

});

