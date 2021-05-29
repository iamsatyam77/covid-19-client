export interface IState {
  state_id: number;
  state_name: string;
  state_name_l: string;
}

export interface IStateResponse {
  ttl: number;
  states: IState[];
}

export interface IDistrict {
  state_id: number;
  district_id: number;
  district_name: string;
  district_name_l: string;
}

export interface IDistrictResponse {
  districts: IDistrict[];
  ttl: number;
}
