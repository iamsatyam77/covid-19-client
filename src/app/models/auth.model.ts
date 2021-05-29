export interface IGenerateOTPRespone {
  txnId: string;
}

export interface IConfirmOTP extends IGenerateOTPRespone {
  otp: string;
}

export interface IToken {
  token: string;
}
