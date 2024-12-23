export type TStatus = 'Ideas' | 'Research' | 'TODO' | 'Done';

export interface Icard {
  task: string;
  status: TStatus;
  description?: string;
}
