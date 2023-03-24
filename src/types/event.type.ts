export type EventT = {
  event_name: string;
  event_name_id: number; //17
  ip_address: string;
  res_name: string;
  res_id: number;
  rst_name: string;
  typ_resource_table: string;
  typ_resource_field: string;
  resource_number: number;
  ident_type: string;
  resource_type: number;
  device_type_id: string;
  zone_exit: string; //адресс откуда уходит
  zone_exit_id: number; //id выхода
  zone_enter: string; //адресс куда заходит
  zone_enter_id: number; //id входа
  operator_id: number;
  category: string;
  category_id: number;
  subcategory: string;
  subcategory_id: number;
  description: string;
  id: number;
  time_label: string; //Date
  db_time_label: string;
  time_label_utc: string;
  comment: string;
  segment_id: number; //?
  segment_name: string; //?
  cars: string; //?
  device_name: string;
  device_id: number;
  device_zone_id: number;
};

export type UserT = {
  fio: string;
  division_name: string; //отдел
  division: number;
  user_name: string;
  user_id: number;
  position_name: string; //должность
  position: number; //id должности
  identifier: string; //номер идентификатора карты // 6/43
  tabel_number: string; //табельный номер
};
