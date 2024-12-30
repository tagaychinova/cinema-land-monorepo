export interface Movie {
  id: string;
  title: string;
  genre: string;
  yearOfIssue: number;
}

export interface Country {
  id: number;
  name: string;
}

export interface ToastMessage {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
