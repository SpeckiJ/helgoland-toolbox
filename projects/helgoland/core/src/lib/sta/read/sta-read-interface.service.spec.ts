import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from '../../dataset-api/http.service';
import { SplittedDataDatasetApiInterface } from '../../dataset-api/splitted-data-api-interface.service';
import { StaDeleteInterfaceService } from '../delete/sta-delete-interface.service';
import { StaInsertInterfaceService } from '../insert/sta-insert-interface.service';
import { TranslateTestingModule } from './../../../../../../testing/translate.testing.module';
import { InternalIdHandler } from './../../dataset-api/internal-id-handler.service';
import { StaReadInterfaceService } from './sta-read-interface.service';

const staUrl = 'http://docker.srv.int.52north.org:8081/sta/';
const fluggs = 'https://www.fluggs.de/sos2/api/v1/';

describe('StaImplInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      TranslateTestingModule
    ],
    providers: [
      HttpService,
      StaReadInterfaceService,
      StaDeleteInterfaceService,
      StaInsertInterfaceService,
      SplittedDataDatasetApiInterface,
      InternalIdHandler
    ]
  }));

  it('should be created', () => {
    const service: StaReadInterfaceService = TestBed.get(StaReadInterfaceService);
    expect(service).toBeTruthy();
  });

  it('should fetch things', () => {
    const read: StaReadInterfaceService = TestBed.get(StaReadInterfaceService);
    expect(read).toBeTruthy();
  });
});
