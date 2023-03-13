import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { XmlService } from './xml.service';
import { CoreService } from './core.service';

@Module({
  providers: [ApiService, XmlService, CoreService],
  exports: [CoreService],
})
export class CommonModule {}
