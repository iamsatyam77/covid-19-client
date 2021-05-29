export interface ISessionCalendarEntry {
  centers: Center[];
}

export interface Center {
  center_id: number;
  name: string;
  name_l: string;
  address: string;
  address_l: string;
  state_name: string;
  state_name_l: string;
  district_name: string;
  district_name_l: string;
  block_name: string;
  block_name_l: string;
  pincode: string;
  lat: number;
  long: number;
  from: string;
  to: string;
  fee_type: string;
  vaccine_fees: VaccineFee[];
  sessions: Session[];
}

export interface Session {
  session_id: string;
  date: string;
  available_capacity: number;
  available_capacity_dose1: number;
  available_capacity_dose2: number;
  min_age_limit: number;
  vaccine: string;
  slots: string[];
}

export interface VaccineFee {
  vaccine: string;
  fee: string;
}

export interface ICenterResponse {
  centers: ICenter[];
  ttl: number;
}

export interface ICenter {
  center_id: number;
  name: string;
  name_l: string;
  address: string;
  address_l: string;
  state_name: string;
  state_name_l: string;
  district_name: string;
  district_name_l: string;
  block_name: string;
  block_name_l: string;
  pincode: string;
  lat: number;
  long: number;
  from: string;
  to: string;
  fee_type: string;
}

export interface ISessions {
  sessions: ISession[];
}

export interface ISession {
  center_id: number;
  name: string;
  name_l: string;
  address: string;
  address_l: string;
  state_name: string;
  state_name_l: string;
  district_name: string;
  district_name_l: string;
  block_name: string;
  block_name_l: string;
  pincode: string;
  lat: number;
  long: number;
  from: string;
  to: string;
  fee_type: string;
  fee: string;
  session_id: string;
  date: string;
  available_capacity: number;
  available_capacity_dose1: number;
  available_capacity_dose2: number;
  min_age_limit: number;
  vaccine: string;
  slots: string[];
}

export interface IAppointmentByPin {
  pincode: string;
  date: string;
}

export interface IAppointmentByDistrict {
  districtId: string;
  date: string;
}

export interface IAppointmentByLatLong {
  lat: number;
  long: number;
}

export interface IAppointmentByCenter {
  centerId: string;
  date: string;
}
