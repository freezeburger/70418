export type NotificationLevels = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Notification{
  id:number;
  level: NotificationLevels;
  text:string
}
