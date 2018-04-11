import { TestBed, inject } from '@angular/core/testing';

import { FileUpLoadService } from './file-up-load.service';

describe('FileUpLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUpLoadService]
    });
  });

  it('should be created', inject([FileUpLoadService], (service: FileUpLoadService) => {
    expect(service).toBeTruthy();
  }));
});
