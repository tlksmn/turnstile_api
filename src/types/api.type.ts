import { EventT, UserT } from './event.type';

export type ApiT = {
  rows: (EventT & UserT)[];
  page: 1;
  records: number;
  total: number;
};
