export interface step1login {
    mobile: string;
    device_id: string;
    device_model: string;
    device_os: string;
    gcm?: string
}

export interface step2login {
  mobile: string;
  device_id: string;
  verification_code: string;
  nickname?: string
}

