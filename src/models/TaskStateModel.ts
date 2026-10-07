import type { TaskModel } from './TaskModel';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // Historico, MainForm
  secondsRemaining: number; // CountDown, Historico, MainForm, Button
  formattedSecondsRemaining: string; // Title, CountDown
  activeTask: TaskModel | null; // CountDown, Historico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
