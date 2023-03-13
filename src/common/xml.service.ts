import { Injectable } from '@nestjs/common';
import { XMLBuilder, XmlBuilderOptionsOptional } from 'fast-xml-parser';

@Injectable()
export class XmlService {
  private readonly xmlBuilder: XMLBuilder;
  private readonly options: XmlBuilderOptionsOptional = {
    attributeNamePrefix: '$',
    format: true,
    ignoreAttributes: false,
    suppressEmptyNode: false,
  };
  constructor() {
    this.xmlBuilder = new XMLBuilder(this.options);
  }

  generate() {}
}
