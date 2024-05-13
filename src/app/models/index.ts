export interface Time {
  hours: number;
  minutes: number;
}

export interface CountdownFormValue {
  start: Time;
  duration: Time;
}

export interface CountdownSettings {
  start: string;
  duration: Time;
}