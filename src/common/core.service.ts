import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';
import { XmlService } from './xml.service';

@Injectable()
export class CoreService {
  constructor(
    private readonly apiService: ApiService,
    private readonly xmlService: XmlService,
  ) {}
}
