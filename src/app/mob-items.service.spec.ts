import { TestBed, inject } from '@angular/core/testing';

import { MobItemsService } from './mob-items.service';

describe('MobItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobItemsService]
    });
  });

  it('should be created', inject([MobItemsService], (service: MobItemsService) => {
    expect(service).toBeTruthy();
  }));
});
