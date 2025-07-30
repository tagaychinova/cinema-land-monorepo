export enum MovieType {
  Film = 1,
  Cartoon = 2,
  Series = 3,
}

export interface Movie {
  id: string;
  title: string;
  movieType: MovieType;
  countryIds: number[];
  genreIds: number[];
  yearOfIssue: number;
  coverFileId?: number;
  rating: number;
  description: string;
  durationMinutes: number;
  ageRating: number;
}

export interface Country {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ToastMessage {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export type Navbar = {
  isOpened: boolean;
};

export enum ErrorCode {
  NotUnique,
}

export class StorageError extends Error {
  code: ErrorCode;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

type SuccessResult<T> = {
  success: true;
  payload: T;
};

type ErrorResult = {
  success: false;
  error: {
    message: string;
    code?: ErrorCode;
  };
};

export type Result<T> = SuccessResult<T> | ErrorResult;
