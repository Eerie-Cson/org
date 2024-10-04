// types/tasks.ts

export type RepeatType = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RepeatDetails {
  days?: number | string[]; // For daily and weekly
  months?: number; // For monthly
  day?: number; // For monthly
  years?: number; // For yearly
}

export interface Task {
  name: string;
  description: string;
  progress: Progress;
  date: string; // ISO string format
  repeatType: RepeatType;
  repeatDetails: RepeatDetails;
}

export enum Progress {
  Incomplete = 'Incomplete',
  Completed = 'Completed',
}
