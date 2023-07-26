export interface Board {
  id?: string,
  title: string
}

export interface Column {
  id: string,
  title: string,
  order: number,
  boardId: string
}

export interface Card {
  id: number,
  text: string
}

export interface DialogData {
  message: string;
}
