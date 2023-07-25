export interface Board {
  id?: number,
  title: string,
}
export interface Card {
  id: number,
  text: string
}

export interface Column {
  id: number,
  title: string,
  color: string,
  list: Card[]
}

export interface DialogData {
  message: string;
}
