import { TestBed, inject } from '@angular/core/testing';

import { LaunchesService } from './launches.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        LaunchesService
      ]
    });
  });

  it('should be created', inject([LaunchesService], (service: LaunchesService) => {
    expect(service).toBeTruthy();
  }));
});
