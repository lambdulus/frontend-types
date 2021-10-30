export enum BoxType {
  UNTYPED_LAMBDA = 'UNTYPED_LAMBDA',
  LISP = 'LISP',
  MARKDOWN = 'MARKDOWN',
}

export interface AbstractBoxState {
  type : BoxType,
  __key : string, 
  title : String,
  minimized : boolean,
  menuOpen : boolean,
  settingsOpen : boolean,
}
