export enum Progress {
  Done = 'Done',
  NotStarted = 'Not Started',
}

export type Task = {
  name: string;
  progress: Progress;
  isRecurring: boolean;
  details: string;
};
