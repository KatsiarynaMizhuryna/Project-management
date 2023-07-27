export interface Board {
  id?: string;
  title: string;
}

export interface Column {
  id: string;
  title: string;
  order: number;
  boardId: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  order: number;
  boardId: string;
  columnId: string;
}

export interface DialogData {
  message: string;
}
